import React from "react";
import {
  AccessibilityInfo,
  Dimensions,
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
  scrollEnabled: true
};

const defaultCarouselProps = {
  showsControls: true,
  showsDots: true,
  initialIndex: 0
};

const styles = StyleSheet.create(defaultStyles);

export class Pinar extends React.PureComponent<Props, State> {
  displayName: "Pinar";

  private scrollView: ScrollView | null;

  static defaultProps = { ...defaultScrollViewProps, ...defaultCarouselProps };

  constructor(props: Props) {
    super(props);
    const { height, width } = this.getCarouselDimensions();
    const total = React.Children.toArray(props.children).length;
    this.state = { activePageIndex: 0, height, width, total };
    this.scrollView = null;
  }

  componentDidMount() {
    const { activePageIndex } = this.state;
    const { initialIndex } = this.props;

    if (initialIndex && initialIndex !== activePageIndex) {
      this.scrollBy(initialIndex, false);
      /* eslint-disable react/no-did-mount-set-state */
      this.setState({
        activePageIndex: initialIndex
      });
      /* eslint-enable react/no-did-mount-set-state */
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { height, width, children } = this.props;
    const needsToUpdateWidth = prevProps.width !== width;
    const needsToUpdateHeight = prevProps.height !== height;
    const total = React.Children.toArray(children).length;
    const needsToUpdateTotal = prevState.total !== total;
    if (needsToUpdateHeight || needsToUpdateWidth || needsToUpdateTotal) {
      /* eslint-disable react/no-did-update-set-state */
      this.setState({
        ...this.getCarouselDimensions(),
        total
      });
      /* eslint-enable react/no-did-update-set-state */
    }
  }

  private getCarouselDimensions(): { height: number; width: number } {
    const { height, width } = this.props;
    const dimensions = Dimensions.get("window");
    return {
      height: height !== undefined ? height : dimensions.height,
      width: width !== undefined ? width : dimensions.width
    };
  }

  private onScrollEnd(e: NativeSyntheticEvent<NativeScrollEvent>): void {
    const { activePageIndex } = this.state;
    const { horizontal, onIndexChanged } = this.props;
    const contentOffset = e.nativeEvent.contentOffset;
    const viewSize = e.nativeEvent.layoutMeasurement;
    const offset = horizontal ? contentOffset.x : contentOffset.y;
    const size = horizontal ? viewSize.width : viewSize.height;
    const nextActivePageIndex = Math.floor(offset / size);
    const hasChangedIndex = activePageIndex !== nextActivePageIndex;

    if (!hasChangedIndex) {
      return;
    }

    if (typeof onIndexChanged === "function") {
      onIndexChanged(nextActivePageIndex);
    }

    this.setState({
      activePageIndex: nextActivePageIndex
    });

    const nextActivePage = nextActivePageIndex + 1;

    if (Platform.OS === "ios") {
      AccessibilityInfo.announceForAccessibility(
        "Changed to page " + nextActivePage
      );
    }
  }

  private isActivePageIndex(index: number): boolean {
    const { activePageIndex, total } = this.state;
    const min = 0;
    const max = total;
    const isCurrentIndex = index === activePageIndex;
    const isSmallerThanMin = index === min && activePageIndex < min;
    const isBiggerThanMax = index === max && activePageIndex > max;
    return isCurrentIndex || isSmallerThanMin || isBiggerThanMax;
  }

  public scrollBy(index: number, animated: boolean = true): void {
    if (this.scrollView === null) {
      return;
    }
    const { activePageIndex, width, height } = this.state;
    const { horizontal } = this.props;
    const diff = 0 + index + activePageIndex;
    const min = 0;
    const x = horizontal ? diff * width : min;
    const y = horizontal ? min : diff * height;
    this.scrollView.scrollTo({ animated, x, y });
  }

  private scrollToPrev(): void {
    this.scrollBy(-1);
  }

  private scrollToNext(): void {
    this.scrollBy(1);
  }

  private renderNextButton(): JSX.Element {
    const { renderNextButton } = this.props;
    const { activePageIndex, total } = this.state;
    const isShown = activePageIndex < total - 1;

    if (isShown) {
      if (typeof renderNextButton === "function") {
        return renderNextButton(this.scrollToNext);
      }
      return (
        <TouchableOpacity
          accessibilityComponentType="button"
          accessibilityLabel="Next"
          accessibilityRole="button"
          accessibilityTraits="button"
          accessible={true}
          onPress={() => this.scrollToNext()}
        >
          <Text accessibilityLabel="Next" style={styles.buttonText}>
            ›
          </Text>
        </TouchableOpacity>
      );
    }
    return <View />;
  }

  private renderPrevButton(): JSX.Element {
    const { renderPrevButton } = this.props;
    const { activePageIndex } = this.state;
    const isShown = activePageIndex > 0;

    if (isShown) {
      if (typeof renderPrevButton === "function") {
        return renderPrevButton(this.scrollToPrev);
      }
      return (
        <TouchableOpacity
          accessibilityComponentType="button"
          accessibilityLabel="Previous"
          accessibilityRole="button"
          accessibilityTraits="button"
          accessible={true}
          onPress={() => this.scrollToPrev()}
        >
          <Text accessibilityLabel="Previous" style={styles.buttonText}>
            ‹
          </Text>
        </TouchableOpacity>
      );
    }
    return <View />;
  }

  private refScrollView(view: ScrollView | null): void {
    if (view === null) {
      return;
    }
    this.scrollView = view;
  }

  private renderControls(): JSX.Element {
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
  }

  private renderDots(): JSX.Element {
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
        })}
      </View>
    );
  }

  private renderChildren(children: React.ReactNode): React.ReactNode {
    const { height, width } = this.state;
    return React.Children.map(children, child => {
      /* eslint-disable react-native-a11y/accessibility-label */
      return (
        <View accessible={true} style={{ height, width }}>
          {child}
        </View>
      );
      /* eslint-enable react-native-a11y/accessibility-label */
    });
  }

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
      scrollEnabled
    } = this.props;
    const { width, height } = this.state;

    return (
      <View style={[styles.wrapper, { height, width }]}>
        <ScrollView
          automaticallyAdjustContentInsets={automaticallyAdjustContentInsets}
          bounces={bounces}
          horizontal={horizontal}
          onMomentumScrollEnd={e => this.onScrollEnd(e)}
          onScrollEndDrag={e => this.onScrollEnd(e)}
          pagingEnabled={pagingEnabled}
          ref={view => this.refScrollView(view)}
          removeClippedSubviews={removeClippedSubviews}
          scrollEnabled={scrollEnabled}
          scrollEventThrottle={16}
          scrollsToTop={scrollsToTop}
          showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        >
          {this.renderChildren(children)}
        </ScrollView>
        {showsDots && this.renderDots()}
        {showsControls && this.renderControls()}
      </View>
    );
  }
}
