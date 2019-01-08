import React from "react";
import {
  Dimensions,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Props, State } from "../index";
import { defaultStyles } from "./styles";

const defaultScrollViewProps = {
  horizontal: true,
  pagingEnabled: true,
  bounces: false,
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  scrollsToTop: false,
  removeClippedSubviews: true,
  automaticallyAdjustContentInsets: false,
  scrollEventThrottle: 16,
  scrollEnabled: true
};

const defaultCarouselProps = {
  showsControls: true,
  showsDots: true,
  autoplay: false,
  autoplayInterval: 3000,
  accessibility: true,
  accessibilityLabelPrev: "Previous",
  accessibilityLabelNext: "Next",
  index: 0
};

const styles = StyleSheet.create(defaultStyles);

export class Pinar extends React.PureComponent<Props, State> {
  displayName: "Pinar";

  private scrollView: ScrollView | null;

  private autoplayTimer: number = 0;

  private internals: {
    isAutoplayEnd: boolean;
    isScrolling: boolean;
    offset: { x: number; y: number };
    onScrollEndCallbackTargetOffset: number;
  };

  static defaultProps = { ...defaultScrollViewProps, ...defaultCarouselProps };

  constructor(props: Props) {
    super(props);
    const { height, width } = this.getCarouselDimensions();
    const total = React.Children.toArray(props.children).length;
    const initialIndex = props.index || 0;
    const lastIndex = total - 1;
    const activePageIndex = total > 1 ? Math.min(initialIndex, lastIndex) : 0;
    const offset = { x: 0, y: 0 };
    this.internals = {
      isAutoplayEnd: false,
      isScrolling: false,
      offset,
      onScrollEndCallbackTargetOffset: 0
    };
    this.state = { activePageIndex, height, width, total, offset };
    this.scrollView = null;
  }

  componentDidMount() {
    const { activePageIndex } = this.state;
    const { index, autoplay } = this.props;

    if (index && index !== activePageIndex) {
      this.scrollBy(index, false);
      /* eslint-disable react/no-did-mount-set-state */
      this.setState({ activePageIndex: index });
      /* eslint-enable react/no-did-mount-set-state */
    }

    if (autoplay) {
      this.autoplay();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.autoplayTimer);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { height, width, index, children } = this.props;
    const needsToUpdateWidth = prevProps.width !== width;
    const needsToUpdateHeight = prevProps.height !== height;
    const total = React.Children.toArray(children).length;
    const needsToUpdateTotal = prevState.total !== total;
    const needsToUpdateIndex = prevProps.index !== index;
    if (
      needsToUpdateHeight ||
      needsToUpdateWidth ||
      needsToUpdateTotal ||
      needsToUpdateIndex
    ) {
      /* eslint-disable react/no-did-update-set-state */
      this.setState({
        ...this.getCarouselDimensions(),
        total,
        activePageIndex: index
      });
      /* eslint-enable react/no-did-update-set-state */
    }
  }

  private autoplay = () => {
    const { isAutoplayEnd, isScrolling } = this.internals;

    if (isScrolling || isAutoplayEnd) {
      return;
    }

    const { autoplayInterval } = this.props;

    clearTimeout(this.autoplayTimer);

    this.autoplayTimer = setTimeout((): void => {
      const { loop } = this.props;
      const { total, activePageIndex } = this.state;

      if (!loop && activePageIndex === total - 1) {
        this.internals.isAutoplayEnd = true;
      } else {
        this.scrollToNext();
      }
    }, autoplayInterval);
  };

  private getCarouselDimensions = (): { height: number; width: number } => {
    const { height, width } = this.props;
    const dimensions = Dimensions.get("window");
    return {
      height: height !== undefined ? height : dimensions.height,
      width: width !== undefined ? width : dimensions.width
    };
  };

  private onScrollBegin = (
    _: NativeSyntheticEvent<NativeScrollEvent>
  ): void => {
    this.internals.isScrolling = true;
  };

  private onScrollEndDrag = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ): void => {
    const { contentOffset } = e.nativeEvent;
    const { horizontal } = this.props;
    const { activePageIndex, total } = this.state;
    const { offset } = this.internals;
    const previousOffset = horizontal ? offset.x : offset.y;
    const newOffset = horizontal ? contentOffset.x : contentOffset.y;
    const isFirstPage = activePageIndex === 0;
    const isLastPage = activePageIndex === total - 1;

    if (previousOffset === newOffset && (isFirstPage || isLastPage)) {
      this.internals.isScrolling = false;
    }
  };

  private onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>): void => {
    if (Platform.OS === "android") {
      const { horizontal } = this.props;
      const { x, y } = e.nativeEvent.contentOffset;
      const offset = horizontal ? Math.floor(x) : Math.floor(y);
      if (offset === this.internals.onScrollEndCallbackTargetOffset) {
        this.onScrollEnd(e);
      }
    }
  };

  private onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>): void => {
    this.internals.isScrolling = false;

    const { activePageIndex, total, height, width } = this.state;
    const { horizontal, onIndexChanged, loop } = this.props;
    const offset = e.nativeEvent.contentOffset;
    const dir = horizontal ? "x" : "y";
    const step = dir === "x" ? width : height;
    const diff = offset[dir] - this.internals.offset[dir];

    if (!diff) return;

    const nextActivePageIndex = Math.floor(
      activePageIndex + Math.round(diff / step)
    );
    const isIndexSmallerThanFirstPageIndex = nextActivePageIndex <= -1;
    const isIndexBiggerThanLastPageIndex = nextActivePageIndex >= total;
    const needsToUpdateOffset =
      isIndexSmallerThanFirstPageIndex || isIndexBiggerThanLastPageIndex;
    const newState = { activePageIndex: nextActivePageIndex };

    if (loop) {
      if (isIndexSmallerThanFirstPageIndex) {
        newState.activePageIndex = total - 1;
        offset[dir] = step * total;
      } else if (isIndexBiggerThanLastPageIndex) {
        newState.activePageIndex = 0;
        offset[dir] = step;
      }
    }

    this.internals.offset = offset;

    if (typeof onIndexChanged === "function") {
      onIndexChanged(newState.activePageIndex, total);
    }

    if (needsToUpdateOffset) {
      // when swiping to the beginning of a looping set for the third time,
      // the new offset will be the same as the last one set in state.
      // Setting the offset to the same thing will not do anything,
      // so we increment it by 1 then immediately set it to what it should be,
      // after render.
      const hasOffsetChanged = offset[dir] !== this.internals.offset[dir];
      if (!hasOffsetChanged) {
        const newOffset = { x: 0, y: 0 };
        newOffset[dir] = offset[dir] + 1;
        this.setState(
          {
            ...newState,
            offset: newOffset
          },
          () => {
            this.scrollTo({
              x: newOffset.x,
              y: newOffset.y,
              animated: false
            });
            this.setState({ offset }, () => {
              this.scrollTo({
                x: offset.x,
                y: offset.y,
                animated: false
              });
            });
          }
        );
      } else {
        this.setState({ ...newState, offset }, () => {
          this.scrollTo({ x: offset.x, y: offset.y, animated: false });
        });
      }
    } else {
      this.setState(newState);
    }

    const { autoplay } = this.props;

    if (autoplay) {
      this.autoplay();
    }
  };

  private isActivePageIndex = (index: number): boolean => {
    const { activePageIndex, total } = this.state;
    const min = 0;
    const max = total;
    const isCurrentIndex = index === activePageIndex;
    const isSmallerThanMin = index === min && activePageIndex < min;
    const isBiggerThanMax = index === max && activePageIndex > max;
    return isCurrentIndex || isSmallerThanMin || isBiggerThanMax;
  };

  public scrollTo = ({
    x,
    y,
    animated
  }: {
    x: number;
    y: number;
    animated: boolean;
  }): void => {
    if (this.scrollView === null) {
      return;
    }
    this.scrollView.scrollTo({
      x,
      y,
      animated
    });
  };

  public scrollBy = (index: number, animated: boolean = true): void => {
    const { total } = this.state;
    const { isScrolling } = this.internals;
    if (this.scrollView === null || isScrolling || total < 2) {
      return;
    }
    const { activePageIndex, width, height } = this.state;
    const { horizontal, loop } = this.props;
    const diff = (loop ? 1 : 0) + index + activePageIndex;
    const min = 0;
    const x = horizontal ? diff * width : min;
    const y = horizontal ? min : diff * height;
    this.scrollTo({ animated, x, y });
    if (Platform.OS === "android") {
      this.internals.onScrollEndCallbackTargetOffset = horizontal
        ? Math.floor(x)
        : Math.floor(y);
    }
    this.internals.isScrolling = true;
    this.internals.isAutoplayEnd = false;
  };

  private scrollToPrev = (): void => {
    this.scrollBy(-1);
  };

  private scrollToNext = (): void => {
    this.scrollBy(1);
  };

  private onLayout = (e: LayoutChangeEvent): void => {
    const { activePageIndex, total } = this.state;
    // Rename height and width when destructuring
    // to avoid conflicting variable names.
    const { height: propsHeight, width: propsWidth } = this.props;
    const { height: layoutHeight, width: layoutWidth } = e.nativeEvent.layout;
    const width = propsWidth !== undefined ? propsWidth : layoutWidth;
    const height = propsHeight !== undefined ? propsHeight : layoutHeight;

    const initialOffset = { x: 0, y: 0 };
    const offset = initialOffset;
    this.internals.offset = initialOffset;

    if (total > 1) {
      const { horizontal, loop } = this.props;
      const dir = horizontal ? "x" : "y";
      const index = loop ? activePageIndex + 1 : activePageIndex;
      offset[dir] = dir === "x" ? width * index : height * index;
    }

    this.setState({ height, width, offset });
    this.scrollTo({ x: offset.x, y: offset.y, animated: false });
  };

  private renderNextButton = (): JSX.Element => {
    const { renderNextButton, loop } = this.props;
    const { activePageIndex, total } = this.state;
    const isShown = loop || activePageIndex < total - 1;

    if (isShown) {
      if (typeof renderNextButton === "function") {
        return renderNextButton(this.scrollToNext);
      }
      const { accessibility, accessibilityLabelNext } = this.props;
      return (
        <TouchableOpacity
          accessibilityComponentType="button"
          accessibilityLabel={accessibilityLabelNext}
          accessibilityRole="button"
          accessibilityTraits="button"
          accessible={accessibility}
          onPress={this.scrollToNext}
        >
          <Text
            accessibilityLabel={accessibilityLabelNext}
            accessible={accessibility}
            style={styles.buttonText}
          >
            ›
          </Text>
        </TouchableOpacity>
      );
    }
    return <View />;
  };

  private renderPrevButton = (): JSX.Element => {
    const { renderPrevButton, loop } = this.props;
    const { activePageIndex } = this.state;
    const isShown = loop || activePageIndex > 0;

    if (isShown) {
      if (typeof renderPrevButton === "function") {
        return renderPrevButton(this.scrollToPrev);
      }
      const { accessibility, accessibilityLabelPrev } = this.props;
      return (
        <TouchableOpacity
          accessibilityComponentType="button"
          accessibilityLabel={accessibilityLabelPrev}
          accessibilityRole="button"
          accessibilityTraits="button"
          accessible={accessibility}
          onPress={this.scrollToPrev}
        >
          <Text
            accessibilityLabel={accessibilityLabelPrev}
            accessible={accessibility}
            style={styles.buttonText}
          >
            ‹
          </Text>
        </TouchableOpacity>
      );
    }
    return <View />;
  };

  private refScrollView = (view: ScrollView | null): void => {
    if (view === null) {
      return;
    }
    this.scrollView = view;
  };

  private renderControls = (): JSX.Element => {
    const { renderControls } = this.props;

    if (typeof renderControls === "function") {
      return renderControls();
    }

    const { height, width } = this.state;
    const { controlsContainerStyle } = this.props;

    const defaultControlsContainerStyle = [
      styles.controlsContainer,
      { height, width }
    ];
    return (
      <View
        pointerEvents="box-none"
        style={controlsContainerStyle || defaultControlsContainerStyle}
      >
        {this.renderPrevButton()}
        {this.renderNextButton()}
      </View>
    );
  };

  private renderDots = (): JSX.Element => {
    const { renderDots } = this.props;

    if (typeof renderDots === "function") {
      const { activePageIndex, total } = this.state;
      return renderDots(activePageIndex, total, this);
    }

    const {
      children,
      dotsContainerStyle,
      horizontal,
      renderActiveDot,
      renderDot
    } = this.props;
    const defaultDotsContainerStyle = horizontal
      ? styles.dotsContainerHorizontal
      : styles.dotsContainerVertical;

    return (
      <View style={dotsContainerStyle || defaultDotsContainerStyle}>
        {React.Children.map(children, (_: React.ReactChild, i: number) => {
          /* eslint-disable react/no-array-index-key */
          const isActive = this.isActivePageIndex(i);
          if (isActive && typeof renderActiveDot === "function") {
            return renderActiveDot();
          }
          if (typeof renderDot === "function") {
            return renderDot();
          }
          const { dotStyle, activeDotStyle } = this.props;
          const style = isActive
            ? activeDotStyle || styles.dotActive
            : dotStyle || styles.dot;
          return <View key={i} style={style} />;
          /* eslint-enable react/no-array-index-key */
        })}
      </View>
    );
  };

  private renderChildren = (children: React.ReactNode): React.ReactNode => {
    const { height, width, total } = this.state;
    const { accessibility, loop } = this.props;
    const needsToLoop = loop && total > 1;
    const childrenArray = React.Children.toArray(children);
    const keys: string[] = Object.keys(childrenArray);

    if (needsToLoop) {
      // To support seamless looping:
      // - add the last page index to the beginning of the array
      // - add the first page index to the end of the array
      const firstPageIndex = 0;
      const lastPageIndex = total - 1;
      keys.unshift(String(lastPageIndex));
      keys.push(String(firstPageIndex));
    }

    return keys.map((key: string, i: number) => {
      /* eslint-disable react-native-a11y/accessibility-label, react/no-array-index-key */
      return (
        <View
          accessible={accessibility}
          key={i + key}
          style={{ height, width }}
        >
          {childrenArray[Number(key)]}
        </View>
      );
      /* eslint-enable react-native-a11y/accessibility-label, react/no-array-index-key */
    });
  };

  render(): JSX.Element {
    const {
      bounces,
      children,
      horizontal,
      pagingEnabled,
      showsControls,
      showsHorizontalScrollIndicator,
      showsDots,
      showsVerticalScrollIndicator,
      scrollsToTop,
      removeClippedSubviews,
      automaticallyAdjustContentInsets,
      scrollEventThrottle,
      scrollEnabled,
      width,
      height
    } = this.props;

    const hasHeightAndWidthProps = width !== undefined && height !== undefined;

    return (
      <View
        onLayout={this.onLayout}
        style={[
          styles.wrapper,
          { maxHeight: height, maxWidth: width },
          !hasHeightAndWidthProps && { flex: 1 }
        ]}
      >
        <View style={{ height, width }}>
          <ScrollView
            automaticallyAdjustContentInsets={automaticallyAdjustContentInsets}
            bounces={bounces}
            horizontal={horizontal}
            onMomentumScrollEnd={this.onScrollEnd}
            onScroll={this.onScroll}
            onScrollBeginDrag={this.onScrollBegin}
            onScrollEndDrag={this.onScrollEndDrag}
            pagingEnabled={pagingEnabled}
            ref={this.refScrollView}
            removeClippedSubviews={removeClippedSubviews}
            scrollEnabled={scrollEnabled}
            scrollEventThrottle={scrollEventThrottle}
            scrollsToTop={scrollsToTop}
            showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
            showsVerticalScrollIndicator={showsVerticalScrollIndicator}
          >
            {this.renderChildren(children)}
          </ScrollView>
          {showsDots && this.renderDots()}
          {showsControls && this.renderControls()}
        </View>
      </View>
    );
  }
}
