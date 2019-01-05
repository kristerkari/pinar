import { shallow } from "enzyme";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Carousel from "../index";

jest.mock("Dimensions");

describe("render props", () => {
  describe("control buttons", () => {
    it("should allow custom next and prev buttons (show next)", () => {
      const wrapper = shallow(
        <Carousel
          renderNextButton={scrollToNext => (
            <TouchableOpacity
              accessibilityLabel="Custom next button"
              accessibilityRole="button"
              onPress={scrollToNext}
            >
              <Text>Next</Text>
            </TouchableOpacity>
          )}
          renderPrevButton={scrollToPrev => (
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

    it("should allow custom next and prev buttons (show prev)", () => {
      const wrapper = shallow(
        <Carousel
          index={2}
          renderNextButton={scrollToNext => (
            <TouchableOpacity
              accessibilityLabel="Custom next button"
              accessibilityRole="button"
              onPress={scrollToNext}
            >
              <Text>Next</Text>
            </TouchableOpacity>
          )}
          renderPrevButton={scrollToPrev => (
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

    it("should allow custom next and prev buttons (show prev and next)", () => {
      const wrapper = shallow(
        <Carousel
          index={1}
          renderNextButton={scrollToNext => (
            <TouchableOpacity
              accessibilityLabel="Custom next button"
              accessibilityRole="button"
              onPress={scrollToNext}
            >
              <Text>Next</Text>
            </TouchableOpacity>
          )}
          renderPrevButton={scrollToPrev => (
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

    it("should not show custom next and prev buttons when there is only one slide", () => {
      const wrapper = shallow(
        <Carousel
          renderNextButton={scrollToNext => (
            <TouchableOpacity
              accessibilityLabel="Custom next button"
              accessibilityRole="button"
              onPress={scrollToNext}
            >
              <Text>Next</Text>
            </TouchableOpacity>
          )}
          renderPrevButton={scrollToPrev => (
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

  describe("custom dots", () => {
    it("should allow custom active and regular dot", () => {
      const wrapper = shallow(
        <Carousel
          renderActiveDot={() => (
            <View accessibilityLabel="Custom active dot" />
          )}
          renderDot={() => <View accessibilityLabel="Custom dot" />}
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

    it("should allow showing page numbers instead of dots", () => {
      const wrapper = shallow(
        <Carousel
          renderDots={(pageIndex, total, context) => (
            <View>
              <Text>
                {pageIndex + 1}/{total}
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

    it("should allow showing page numbers instead of dots and initialIndex", () => {
      const wrapper = shallow(
        <Carousel
          index={1}
          renderDots={(pageIndex, total, context) => (
            <View>
              <Text>
                {pageIndex + 1}/{total}
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
