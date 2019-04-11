import React from "react";
import {
  AccessibilityInfo,
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

export const DisabledControls = (): JSX.Element => (
  <Carousel
    autoplay={true}
    loop={true}
    onIndexChanged={({ index, total }): void => {
      if (Platform.OS === "ios") {
        const page = index + 1;
        AccessibilityInfo.announceForAccessibility(
          `Changed to page ${page}/${total}`
        );
      }
    }}
    showsControls={false}
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
  </Carousel>
);
