import React from "react";
import {
  AccessibilityInfo,
  Platform,
  TouchableHighlight,
  Image,
  View,
  Alert,
  ImageSourcePropType,
  Dimensions,
} from "react-native";
import Carousel from "../../src/index";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";

const images: ImageSourcePropType[] = [image1, image2, image3];
const dimensions = Dimensions.get("window");
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;

export const TouchableImages = (): JSX.Element => (
  <Carousel
    onIndexChanged={({ index, total }): void => {
      if (Platform.OS === "ios") {
        const page = index + 1;
        AccessibilityInfo.announceForAccessibility(
          `Changed to page ${page}/${total}`
        );
      }
    }}
    controlsButtonStyle={{
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    }}
  >
    {images.map((image, key) => {
      /* eslint-disable react/no-array-index-key */
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          key={key}
        >
          <TouchableHighlight
            accessibilityRole="button"
            onPress={(): void => {
              Alert.alert(`Image ${key + 1} clicked`);
            }}
            style={{
              height: imageHeight,
              width: imageWidth,
            }}
          >
            <Image
              source={image}
              style={{
                flex: 1,
                height: imageHeight,
                width: imageWidth,
              }}
            />
          </TouchableHighlight>
        </View>
      );
    })}
  </Carousel>
);
