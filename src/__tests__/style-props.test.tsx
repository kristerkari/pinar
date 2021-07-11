import { shallow } from "enzyme";
import React from "react";
import { Text, View } from "react-native";
import Carousel, { defaultStyles } from "../index";

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

describe("merging styles with mergeStyles prop", (): void => {
  it("should merge custom controlsContainerStyle with defaults", (): void => {
    const wrapper = shallow(
      <Carousel
        controlsContainerStyle={{ backgroundColor: "blue" }}
        mergeStyles={true}
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

  it("should merge custom controlsButtonStyle with defaults", (): void => {
    const wrapper = shallow(
      <Carousel
        controlsButtonStyle={{ backgroundColor: "blue" }}
        index={1}
        mergeStyles={true}
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

  it("should merge custom controlsTextStyle with defaults", (): void => {
    const wrapper = shallow(
      <Carousel
        controlsTextStyle={{ color: "blue" }}
        index={1}
        mergeStyles={true}
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

  it("should merge custom dotsContainerStyle with defaults", (): void => {
    const wrapper = shallow(
      <Carousel
        dotsContainerStyle={{ backgroundColor: "blue" }}
        mergeStyles={true}
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

  it("should merge custom dotStyle with defaults", (): void => {
    const wrapper = shallow(
      <Carousel dotStyle={{ backgroundColor: "blue" }} mergeStyles={true}>
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

  it("should merge custom activeDotStyle with defaults", (): void => {
    const wrapper = shallow(
      <Carousel activeDotStyle={{ backgroundColor: "blue" }} mergeStyles={true}>
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

describe("merging styles with defaultStyles", (): void => {
  it("should merge custom controlsContainerStyle with defaults", (): void => {
    const wrapper = shallow(
      <Carousel
        controlsContainerStyle={{
          ...defaultStyles.controlsContainer,
          backgroundColor: "blue",
        }}
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

  it("should merge custom controlsTextStyle with defaults", (): void => {
    const wrapper = shallow(
      <Carousel
        controlsTextStyle={{ ...defaultStyles.buttonText, color: "blue" }}
        index={1}
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

  it("should merge custom dotsContainerStyle with defaults", (): void => {
    const wrapper = shallow(
      <Carousel
        dotsContainerStyle={{
          ...defaultStyles.dotsContainerHorizontal,
          backgroundColor: "blue",
        }}
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

  it("should merge custom dotStyle with defaults", (): void => {
    const wrapper = shallow(
      <Carousel dotStyle={{ ...defaultStyles.dot, backgroundColor: "blue" }}>
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

  it("should merge custom activeDotStyle with defaults", (): void => {
    const wrapper = shallow(
      <Carousel
        activeDotStyle={{ ...defaultStyles.dotActive, backgroundColor: "blue" }}
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
