import { PureComponent } from "react";
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollViewProps,
  StyleProp,
  TextStyle,
  ViewStyle
} from "react-native";

interface CustomScrollViewProps {
  horizontal: ScrollViewProps["horizontal"];
  pagingEnabled: ScrollViewProps["pagingEnabled"];
  showsHorizontalScrollIndicator: ScrollViewProps["showsHorizontalScrollIndicator"];
  showsVerticalScrollIndicator: ScrollViewProps["showsVerticalScrollIndicator"];
  bounces: ScrollViewProps["bounces"];
  scrollsToTop: ScrollViewProps["scrollsToTop"];
  removeClippedSubviews: ScrollViewProps["removeClippedSubviews"];
  automaticallyAdjustContentInsets: ScrollViewProps["automaticallyAdjustContentInsets"];
  scrollEventThrottle: ScrollViewProps["scrollEventThrottle"];
  scrollEnabled: ScrollViewProps["scrollEnabled"];
}

interface RenderDotsParams {
  index: number;
  total: number;
  context: any;
}

interface RenderDotParams {
  index: number;
}

interface RenderNextParams {
  scrollToNext: () => void;
}

interface RenderPrevParams {
  scrollToPrev: () => void;
}

interface RenderControlParams extends RenderPrevParams, RenderNextParams {}

interface OnIndexChangedParams {
  index: number;
  total: number;
}

export interface ScrollByOptions {
  index: number;
  animated?: boolean;
}

interface CustomRenderProps {
  renderDots?: (params: RenderDotsParams) => JSX.Element;
  renderDot?: (params: RenderDotParams) => JSX.Element;
  renderActiveDot?: (params: RenderDotParams) => JSX.Element;
  renderControls?: (params: RenderControlParams) => JSX.Element;
  renderNext?: (params: RenderNextParams) => JSX.Element;
  renderPrev?: (params: RenderPrevParams) => JSX.Element;
}

interface CustomStyleProps {
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  controlsContainerStyle?: StyleProp<ViewStyle>;
  dotsContainerStyle?: StyleProp<ViewStyle>;
  dotStyle?: StyleProp<ViewStyle>;
  activeDotStyle?: StyleProp<ViewStyle>;
  controlsButtonStyle?: StyleProp<ViewStyle>;
  controlsTextStyle?: StyleProp<TextStyle>;
}

interface CallbackProps {
  onIndexChanged?: (params: OnIndexChangedParams) => void;
  onScroll?: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onMomentumScrollEnd?: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onLayout?: (e: LayoutChangeEvent) => void;
}

export interface Props
  extends CustomScrollViewProps,
    CustomRenderProps,
    CustomStyleProps,
    CallbackProps {
  showsDots: boolean;
  showsControls: boolean;
  height?: number;
  width?: number;
  index: number;
  loop?: boolean;
  autoplay: boolean;
  autoplayInterval: number;
  accessibility: boolean;
  accessibilityLabelPrev: string;
  accessibilityLabelNext: string;
  children: JSX.Element | JSX.Element[];
  mergeStyles: boolean;
}

export interface State {
  activePageIndex: number;
  width: number;
  height: number;
  total: number;
  offset: {
    x: number;
    y: number;
  };
}

export { defaultStyles } from "./src/styles"

declare module "pinar" {
  export default class Pinar extends PureComponent<Props, State> {
    static defaultProps: {
      horizontal: boolean;
      pagingEnabled: boolean;
      bounces: boolean;
      showsHorizontalScrollIndicator: boolean;
      showsVerticalScrollIndicator: boolean;
      scrollsToTop: boolean;
      removeClippedSubviews: boolean;
      automaticallyAdjustContentInsets: boolean;
      scrollEventThrottle: number;
      scrollEnabled: boolean;
      showsControls: boolean;
      showsDots: boolean;
      autoplay: boolean;
      autoplayInterval: number;
      accessibility: boolean;
      accessibilityLabelPrev: string;
      accessibilityLabelNext: string;
      index: number;
      mergeStyles: boolean;
    };
    public scrollBy(options: ScrollByOptions): void;
    public scrollToIndex(options: ScrollByOptions): void;
    public scrollToPrev(): void;
    public scrollToNext(): void;
    public startAutoplay(): void;
    public stopAutoplay(): void;
  }
}
