import React from "react";
import {
  AccessibilityInfo,
  Button,
  Platform,
  Text,
  TextStyle,
  View,
  ViewStyle
} from "react-native";
import Carousel from "../../src/index";

const styles = {
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a3c9a8"
  } as ViewStyle,
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#84b59f"
  } as ViewStyle,
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#69a297"
  } as ViewStyle,
  text: {
    color: "#1f2d3d",
    opacity: 0.7,
    fontSize: 48,
    fontWeight: "bold"
  } as TextStyle
};

export class Methods extends React.PureComponent {
  carousel: Carousel | null;

  constructor(props: {}) {
    super(props);
    this.carousel = null;
  }

  render(): JSX.Element {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Carousel
          ref={(carousel): void => {
            this.carousel = carousel;
          }}
          height={200}
          autoplayInterval={3000}
          onIndexChanged={({ index, total }): void => {
            if (Platform.OS === "ios") {
              const page = index + 1;
              AccessibilityInfo.announceForAccessibility(
                `Changed to page ${page}/${total}`
              );
            }
          }}
        >
          <View style={styles.slide1} testID="slide-1">
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.slide2} testID="slide-2">
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.slide3} testID="slide-3">
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.slide1} testID="slide-4">
            <Text style={styles.text}>4</Text>
          </View>
          <View style={styles.slide2} testID="slide-5">
            <Text style={styles.text}>5</Text>
          </View>
          <View style={styles.slide3} testID="slide-6">
            <Text style={styles.text}>6</Text>
          </View>
        </Carousel>
        <View style={{ paddingTop: 20 }}>
          <Button
            testID="scroll-to-next"
            title="scroll to next page"
            onPress={(): void | null =>
              this.carousel && this.carousel.scrollToNext()
            }
          />
          <Button
            testID="scroll-to-prev"
            title="scroll to previous page"
            onPress={(): void | null =>
              this.carousel && this.carousel.scrollToPrev()
            }
          />
          <Button
            testID="scroll-to-page-4"
            title="scroll to page 4"
            onPress={(): void | null =>
              this.carousel && this.carousel.scrollToIndex({ index: 3 })
            }
          />
          <Button
            testID="scroll-plus-two"
            title="scroll +2 pages"
            onPress={(): void | null =>
              this.carousel && this.carousel.scrollBy({ index: 2 })
            }
          />
          <Button
            testID="scroll-minus-two"
            title="scroll -2 pages"
            onPress={(): void | null =>
              this.carousel && this.carousel.scrollBy({ index: -2 })
            }
          />
          <Button
            testID="start-autoplay"
            title="start autoplay"
            onPress={(): void | null =>
              this.carousel && this.carousel.startAutoplay()
            }
          />
          <Button
            testID="stop-autoplay"
            title="stop autoplay"
            onPress={(): void | null =>
              this.carousel && this.carousel.stopAutoplay()
            }
          />
        </View>
      </View>
    );
  }
}
