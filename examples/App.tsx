import React from "react";
import { Button, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import {
  Autoplay,
  AutoplayVertical,
  Basic,
  BasicVertical,
  CustomIndex,
  CustomSize,
  DisabledControls,
  Loop
} from "./components";

type Props = any;
type State = {};

class HomeScreen extends React.Component<Props, State> {
  render() {
    const { navigation } = this.props;
    return (
      <View
        style={{
          padding: 20,
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "flex-start"
        }}
      >
        <Button
          onPress={() => navigation.navigate("Basic")}
          title="Basic example"
        />
        <Button
          onPress={() => navigation.navigate("BasicVertical")}
          title="Vertical example"
        />
        <Button
          onPress={() => navigation.navigate("CustomSize")}
          title="Custom height and width example"
        />
        <Button
          onPress={() => navigation.navigate("Loop")}
          title="Looping pages example"
        />
        <Button
          onPress={() => navigation.navigate("Autoplay")}
          title="Autoplay example"
        />
        <Button
          onPress={() => navigation.navigate("AutoplayVertical")}
          title="Autoplay (vertical) example"
        />
        <Button
          onPress={() => navigation.navigate("DisabledControls")}
          title="Hide prev/next buttons example"
        />
        <Button
          onPress={() => navigation.navigate("CustomIndex")}
          title="Custom start page (page 2)"
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Autoplay: {
    screen: Autoplay,
    navigationOptions: {
      title: "Autoplay example"
    }
  },
  AutoplayVertical: {
    screen: AutoplayVertical,
    navigationOptions: {
      title: "Autoplay (vertical) example"
    }
  },
  Basic: {
    screen: Basic,
    navigationOptions: {
      title: "Basic example"
    }
  },
  BasicVertical: {
    screen: BasicVertical,
    navigationOptions: {
      title: "Vertical example"
    }
  },
  CustomIndex: {
    screen: CustomIndex,
    navigationOptions: {
      title: "Custom start page (page 2)"
    }
  },
  CustomSize: {
    screen: CustomSize,
    navigationOptions: {
      title: "Custom height and width example"
    }
  },
  DisabledControls: {
    screen: DisabledControls,
    navigationOptions: {
      title: "Hide prev/next buttons example"
    }
  },
  Loop: {
    screen: Loop,
    navigationOptions: {
      title: "Looping pages example"
    }
  }
});

export default createAppContainer(AppNavigator);
