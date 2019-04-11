import React from "react";
import {
  AccessibilityInfo,
  Platform,
  Text,
  TextStyle,
  TouchableOpacity,
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
  } as TextStyle,
  buttonText: {
    fontSize: 24,
    color: "#1f2d3d",
    fontWeight: "bold"
  } as TextStyle,
  dotsContainer: {
    position: "absolute",
    top: 25,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  } as ViewStyle,
  dotsText: {
    fontSize: 24,
    color: "#1f2d3d"
  } as TextStyle
};

export const CustomRender = (): JSX.Element => (
  <Carousel
    renderNext={({ scrollToNext }): JSX.Element => (
      <TouchableOpacity
        accessibilityRole="button"
        onPress={scrollToNext}
        testID="custom-next"
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    )}
    renderPrev={({ scrollToPrev }): JSX.Element => (
      <TouchableOpacity
        accessibilityRole="button"
        onPress={scrollToPrev}
        testID="custom-prev"
      >
        <Text style={styles.buttonText}>Prev</Text>
      </TouchableOpacity>
    )}
    renderDots={({ index, total }): JSX.Element => (
      <View style={styles.dotsContainer}>
        <Text testID="custom-dots" style={styles.dotsText}>
          {`${index + 1}/${total}`}
        </Text>
      </View>
    )}
    onIndexChanged={({ index, total }): void => {
      if (Platform.OS === "ios") {
        const page = index + 1;
        AccessibilityInfo.announceForAccessibility(
          `Changed to page ${page}/${total}`
        );
      }
    }}
  >
    <View style={styles.slide1}>
      <Text style={styles.text} testID="slide-1">
        1
      </Text>
    </View>
    <View style={styles.slide2}>
      <Text style={styles.text} testID="slide-2">
        2
      </Text>
    </View>
    <View style={styles.slide3}>
      <Text style={styles.text} testID="slide-3">
        3
      </Text>
    </View>
  </Carousel>
);
