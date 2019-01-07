import React from "react";
import { Button, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Autoplay, Basic, DisabledControls, Loop } from "./components";

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
          onPress={() => navigation.navigate("Loop")}
          title="Looping pages example"
        />
        <Button
          onPress={() => navigation.navigate("Autoplay")}
          title="Autoplay example"
        />
        <Button
          onPress={() => navigation.navigate("DisabledControls")}
          title="Hide prev/next buttons example"
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
  Basic: {
    screen: Basic,
    navigationOptions: {
      title: "Basic example"
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
