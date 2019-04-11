import { shallow } from "enzyme";
import React from "react";
import { Text, View } from "react-native";
import Carousel from "../index";

jest.mock("Dimensions");

describe("basic options", (): void => {
  it("should render with default settings", (): void => {
    const wrapper = shallow(
      <Carousel>
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

  it("should not show prev/next buttons when there is only one slide", (): void => {
    const wrapper = shallow(
      <Carousel>
        <View>
          <Text>1</Text>
        </View>
      </Carousel>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should support disabling prev/next controls", (): void => {
    const wrapper = shallow(
      <Carousel showsControls={false}>
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

  it("should support custom a11y labels for prev/next controls", (): void => {
    const wrapper = shallow(
      <Carousel
        accessibilityLabelNext="custom next label"
        accessibilityLabelPrev="custom prev label"
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

  it("should support disabling dots", (): void => {
    const wrapper = shallow(
      <Carousel showsDots={false}>
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

  it("should support providing height and width", (): void => {
    const wrapper = shallow(
      <Carousel height={333} width={444}>
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

  it("should support loop option", (): void => {
    /*
    Looping is implemented by modifying the pages:
    - without loop: 1-2-3
    - with loop: 3-1-2-3-1

    ...and by changing the logic of updating
    the page index and scroll offset to work
    differently when loop is enabled.
    */
    const wrapper = shallow(
      <Carousel loop={true}>
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

  it("should support disabling accessibility", (): void => {
    const wrapper = shallow(
      <Carousel accessibility={false} loop={true}>
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
