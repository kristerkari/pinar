import { shallow } from "enzyme";
import React from "react";
import { Text, View } from "react-native";
import Carousel from "../index";

describe("style props", () => {
  it("should allow custom controlsContainerStyle", () => {
    const wrapper = shallow(
      <Carousel controlsContainerStyle={{ backgroundColor: "blue" }}>
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

  it("should allow custom controlsButtonStyle", () => {
    const wrapper = shallow(
      <Carousel controlsButtonStyle={{ backgroundColor: "blue" }} index={1}>
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

  it("should allow custom controlsTextStyle", () => {
    const wrapper = shallow(
      <Carousel controlsTextStyle={{ color: "blue" }} index={1}>
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

  it("should allow custom dotsContainerStyle", () => {
    const wrapper = shallow(
      <Carousel dotsContainerStyle={{ backgroundColor: "blue" }}>
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

  it("should allow custom dotStyle", () => {
    const wrapper = shallow(
      <Carousel dotStyle={{ backgroundColor: "blue" }}>
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

  it("should allow custom activeDotStyle", () => {
    const wrapper = shallow(
      <Carousel activeDotStyle={{ backgroundColor: "blue" }}>
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
