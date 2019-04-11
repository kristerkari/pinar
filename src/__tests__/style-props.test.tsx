import { shallow } from "enzyme";
import React from "react";
import { Text, View } from "react-native";
import Carousel from "../index";

describe("style props", (): void => {
  it("should allow style prop", (): void => {
    const wrapper = shallow(
      <Carousel style={{ backgroundColor: "blue" }}>
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

  it("should allow containerStyle prop (ScrollView)", (): void => {
    const wrapper = shallow(
      <Carousel containerStyle={{ backgroundColor: "blue" }}>
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

  it("should allow contentContainerStyle prop (ScrollView)", (): void => {
    const wrapper = shallow(
      <Carousel contentContainerStyle={{ backgroundColor: "blue" }}>
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

  it("should allow custom controlsContainerStyle", (): void => {
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

  it("should allow custom controlsButtonStyle", (): void => {
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

  it("should allow custom controlsTextStyle", (): void => {
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

  it("should allow custom dotsContainerStyle", (): void => {
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

  it("should allow custom dotStyle", (): void => {
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

  it("should allow custom activeDotStyle", (): void => {
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
