import { PureComponent } from "react";
import { ScrollViewProps, StyleProp, ViewStyle } from "react-native";

interface CustomScrollViewProps {
  horizontal?: ScrollViewProps["horizontal"];
  pagingEnabled?: ScrollViewProps["pagingEnabled"];
  showsHorizontalScrollIndicator?: ScrollViewProps["showsHorizontalScrollIndicator"];
  showsVerticalScrollIndicator?: ScrollViewProps["showsVerticalScrollIndicator"];
  bounces?: ScrollViewProps["bounces"];
  scrollsToTop?: ScrollViewProps["scrollsToTop"];
  removeClippedSubviews?: ScrollViewProps["removeClippedSubviews"];
  automaticallyAdjustContentInsets?: ScrollViewProps["automaticallyAdjustContentInsets"];
  scrollEnabled?: ScrollViewProps["scrollEnabled"];
}

interface CustomRenderProps {
  renderDots?: (
    pageIndex: number,
    totalPages: number,
    context: any
  ) => JSX.Element;
  renderDot?: () => JSX.Element;
  renderActiveDot?: () => JSX.Element;
  renderControls?: () => JSX.Element;
  renderNextButton?: (scrollToNext: () => void) => JSX.Element;
  renderPrevButton?: (scrollToPrev: () => void) => JSX.Element;
}

interface CustomStyleProps {
  controlsContainerStyle?: StyleProp<ViewStyle>;
  dotsContainerStyle?: StyleProp<ViewStyle>;
  dotStyle?: StyleProp<ViewStyle>;
  activeDotStyle?: StyleProp<ViewStyle>;
}

interface CallbackProps {
  onIndexChanged?: (pageIndex: number) => void;
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
  children: JSX.Element | JSX.Element[];
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

declare module "pinar" {
  export default class Pinar extends PureComponent<Props, State> {
    public scrollBy(pageIndex: number, animated: boolean): void;
  }
}
