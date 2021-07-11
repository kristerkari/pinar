import React from "react";
import {
  AccessibilityInfo,
  Platform,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Carousel from "../../src/index";

const styles = {
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a3c9a8",
  } as ViewStyle,
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#84b59f",
  } as ViewStyle,
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#69a297",
  } as ViewStyle,
  text: {
    color: "#1f2d3d",
    opacity: 0.7,
    fontSize: 48,
    fontWeight: "bold",
  } as TextStyle,
};

export const CustomMergeStyles = (): JSX.Element => (
  <Carousel
    mergeStyles={true}
    dotsContainerStyle={{
      position: "absolute",
      top: 25,
      left: 0,
      right: 0,
      alignItems: "flex-start",
    }}
    activeDotStyle={{
      backgroundColor: "#eace15",
    }}
    dotStyle={{
      backgroundColor: "rgba(0,0,0,.2)",
    }}
    controlsContainerStyle={{
      position: "absolute",
      top: 30,
      left: 0,
      right: 0,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    }}
    controlsButtonStyle={{
      backgroundColor: "black",
      borderRadius: 60,
      opacity: 0.5,
      width: 80,
      height: 80,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}
    controlsTextStyle={{ fontSize: 50, color: "#eace15", padding: 0 }}
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
      <Text style={styles.text}>1</Text>
    </View>
    <View style={styles.slide2}>
      <Text style={styles.text}>2</Text>
    </View>
    <View style={styles.slide3}>
      <Text style={styles.text}>3</Text>
    </View>
  </Carousel>
);
