import { shallow } from "enzyme";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Carousel from "../index";

/* eslint-disable react/jsx-no-bind */

jest.mock("Dimensions");

describe("render props", (): void => {
  describe("control buttons", (): void => {
    it("should allow custom next and prev buttons (show next)", (): void => {
      const wrapper = shallow(
        <Carousel
          renderNext={({ scrollToNext }): JSX.Element => (
            <TouchableOpacity
              accessibilityLabel="Custom next button"
              accessibilityRole="button"
              onPress={scrollToNext}
            >
              <Text>Next</Text>
            </TouchableOpacity>
          )}
          renderPrev={({ scrollToPrev }): JSX.Element => (
            <TouchableOpacity
              accessibilityLabel="Custom prev button"
              accessibilityRole="button"
              onPress={scrollToPrev}
            >
              <Text>Prev</Text>
            </TouchableOpacity>
          )}
        >
          <View>
            <Text>1</Text>
          </View>
          <View>
            <Text>2</Text>
          </View>
          <View>
            <Text>3</Text>
          </View>
        </Carousel>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it("should allow custom next and prev buttons (show prev)", (): void => {
      const wrapper = shallow(
        <Carousel
          index={2}
          renderNext={({ scrollToNext }): JSX.Element => (
            <TouchableOpacity
              accessibilityLabel="Custom next button"
              accessibilityRole="button"
              onPress={scrollToNext}
            >
              <Text>Next</Text>
            </TouchableOpacity>
          )}
          renderPrev={({ scrollToPrev }): JSX.Element => (
            <TouchableOpacity
              accessibilityLabel="Custom prev button"
              accessibilityRole="button"
              onPress={scrollToPrev}
            >
              <Text>Prev</Text>
            </TouchableOpacity>
          )}
        >
          <View>
            <Text>1</Text>
          </View>
          <View>
            <Text>2</Text>
          </View>
          <View>
            <Text>3</Text>
          </View>
        </Carousel>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it("should allow custom next and prev buttons (show prev and next)", (): void => {
      const wrapper = shallow(
        <Carousel
          index={1}
          renderNext={({ scrollToNext }): JSX.Element => (
            <TouchableOpacity
              accessibilityLabel="Custom next button"
              accessibilityRole="button"
              onPress={scrollToNext}
            >
              <Text>Next</Text>
            </TouchableOpacity>
          )}
          renderPrev={({ scrollToPrev }): JSX.Element => (
            <TouchableOpacity
              accessibilityLabel="Custom prev button"
              accessibilityRole="button"
              onPress={scrollToPrev}
            >
              <Text>Prev</Text>
            </TouchableOpacity>
          )}
        >
          <View>
            <Text>1</Text>
          </View>
          <View>
            <Text>2</Text>
          </View>
          <View>
            <Text>3</Text>
          </View>
        </Carousel>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it("should not show custom next and prev buttons when there is only one slide", (): void => {
      const wrapper = shallow(
        <Carousel
          renderNext={({ scrollToNext }): JSX.Element => (
            <TouchableOpacity
              accessibilityLabel="Custom next button"
              accessibilityRole="button"
              onPress={scrollToNext}
            >
              <Text>Next</Text>
            </TouchableOpacity>
          )}
          renderPrev={({ scrollToPrev }): JSX.Element => (
            <TouchableOpacity
              accessibilityLabel="Custom prev button"
              accessibilityRole="button"
              onPress={scrollToPrev}
            >
              <Text>Prev</Text>
            </TouchableOpacity>
          )}
        >
          <View>
            <Text>1</Text>
          </View>
        </Carousel>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("custom dots", (): void => {
    it("should allow custom active and regular dot", (): void => {
      const wrapper = shallow(
        <Carousel
          renderActiveDot={(): JSX.Element => (
            <View accessibilityLabel="Custom active dot" />
          )}
          renderDot={(): JSX.Element => (
            <View accessibilityLabel="Custom dot" />
          )}
        >
          <View>
            <Text>1</Text>
          </View>
          <View>
            <Text>2</Text>
          </View>
        </Carousel>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it("should allow showing page numbers instead of dots", (): void => {
      const wrapper = shallow(
        <Carousel
          renderDots={({ index, total, context }): JSX.Element => (
            <View>
              <Text>
                {index + 1}/{total}
              </Text>
            </View>
          )}
        >
          <View>
            <Text>1</Text>
          </View>
          <View>
            <Text>2</Text>
          </View>
        </Carousel>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it("should allow showing page numbers instead of dots and initialIndex", (): void => {
      const wrapper = shallow(
        <Carousel
          index={1}
          renderDots={({ index, total, context }): JSX.Element => (
            <View>
              <Text>
                {index + 1}/{total}
              </Text>
            </View>
          )}
        >
          <View>
            <Text>1</Text>
          </View>
          <View>
            <Text>2</Text>
          </View>
        </Carousel>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
