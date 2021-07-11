import React from "react";
import { Button, ScrollView, Text, TextStyle } from "react-native";
import { createAppContainer } from "react-navigation";
import {
  createStackNavigator,
  NavigationStackScreenProps,
} from "react-navigation-stack";
import {
  Autoplay,
  AutoplayVertical,
  AutoplayWithoutLoop,
  Basic,
  Basic2Carousels,
  BasicVertical,
  CustomHeight,
  CustomIndex,
  CustomRender,
  CustomSize,
  CustomStyles,
  CustomWidth,
  DisabledControls,
  Loop,
  Methods,
  MethodsWithLoop,
  TouchableImages,
} from "./components";

type Props = NavigationStackScreenProps;
type State = {};

const styles = {
  heading: {
    fontSize: 24,
    fontWeight: "700",
    paddingTop: 12,
    paddingBottom: 12,
  } as TextStyle,
};

class HomeScreen extends React.Component<Props, State> {
  render(): JSX.Element {
    const { navigation } = this.props;
    return (
      <ScrollView
        testID="scrollview"
        style={{ padding: 20 }}
        contentContainerStyle={{ alignItems: "flex-start", paddingBottom: 40 }}
      >
        <Text style={styles.heading}>Basic examples</Text>
        <Button
          testID="basic"
          onPress={(): void => {
            navigation.navigate("Basic");
          }}
          title="Basic"
        />
        <Button
          onPress={(): void => {
            navigation.navigate("BasicVertical");
          }}
          title="Vertical"
        />
        <Button
          onPress={(): void => {
            navigation.navigate("Basic2Carousels");
          }}
          title="2 carousels on the same page"
        />
        <Text style={styles.heading}>Customizing</Text>
        <Button
          onPress={(): void => {
            navigation.navigate("CustomIndex");
          }}
          title="Custom start page (page 2)"
        />
        <Button
          onPress={(): void => {
            navigation.navigate("CustomSize");
          }}
          title="Custom height and width"
        />
        <Button
          onPress={(): void => {
            navigation.navigate("CustomHeight");
          }}
          title="Custom height / auto width"
        />
        <Button
          onPress={(): void => {
            navigation.navigate("CustomWidth");
          }}
          title="Custom width / auto height"
        />
        <Button
          onPress={(): void => {
            navigation.navigate("CustomStyles");
          }}
          title="Custom styling"
        />
        <Button
          testID="custom-render"
          onPress={(): void => {
            navigation.navigate("CustomRender");
          }}
          title="Custom next/prev/dot elements"
        />
        <Button
          testID="touchable-images"
          onPress={(): void => {
            navigation.navigate("TouchableImages");
          }}
          title="Touchable images"
        />
        <Text style={styles.heading}>Looping</Text>
        <Button
          testID="loop"
          onPress={(): void => {
            navigation.navigate("Loop");
          }}
          title="Looping pages"
        />
        <Text style={styles.heading}>Autoplay</Text>
        <Button
          testID="autoplay"
          onPress={(): void => {
            navigation.navigate("Autoplay");
          }}
          title="Autoplay with loop"
        />
        <Button
          onPress={(): void => {
            navigation.navigate("AutoplayVertical");
          }}
          title="Autoplay (vertical)"
        />
        <Button
          testID="disabled-controls"
          onPress={(): void => {
            navigation.navigate("DisabledControls");
          }}
          title="Autoplay with hidden prev/next buttons"
        />
        <Button
          testID="autoplay-without-loop"
          onPress={(): void => {
            navigation.navigate("AutoplayWithoutLoop");
          }}
          title="Autoplay without loop"
        />
        <Text style={styles.heading}>Methods</Text>
        <Button
          testID="methods"
          onPress={(): void => {
            navigation.navigate("Methods");
          }}
          title="Methods"
        />
        <Button
          testID="methods-with-loop"
          onPress={(): void => {
            navigation.navigate("MethodsWithLoop");
          }}
          title="Methods with loop enabled"
        />
      </ScrollView>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Autoplay: {
    screen: Autoplay,
    navigationOptions: {
      title: "Autoplay with loop",
    },
  },
  AutoplayVertical: {
    screen: AutoplayVertical,
    navigationOptions: {
      title: "Autoplay (vertical)",
    },
  },
  AutoplayWithoutLoop: {
    screen: AutoplayWithoutLoop,
    navigationOptions: {
      title: "Autoplay without loop",
    },
  },
  Basic: {
    screen: Basic,
    navigationOptions: {
      title: "Basic",
    },
  },
  Basic2Carousels: {
    screen: Basic2Carousels,
    navigationOptions: {
      title: "2 carousels on the same page",
    },
  },
  BasicVertical: {
    screen: BasicVertical,
    navigationOptions: {
      title: "Vertical",
    },
  },
  CustomHeight: {
    screen: CustomHeight,
    navigationOptions: {
      title: "Custom height with default width",
    },
  },
  CustomIndex: {
    screen: CustomIndex,
    navigationOptions: {
      title: "Custom start page (page 2)",
    },
  },
  CustomRender: {
    screen: CustomRender,
    navigationOptions: {
      title: "Custom next/prev/dot elements",
    },
  },
  CustomSize: {
    screen: CustomSize,
    navigationOptions: {
      title: "Custom height and width",
    },
  },
  CustomStyles: {
    screen: CustomStyles,
    navigationOptions: {
      title: "Custom styling",
    },
  },
  CustomWidth: {
    screen: CustomWidth,
    navigationOptions: {
      title: "Custom width with default height",
    },
  },
  DisabledControls: {
    screen: DisabledControls,
    navigationOptions: {
      title: "Autoplay with hidden prev/next buttons",
    },
  },
  Loop: {
    screen: Loop,
    navigationOptions: {
      title: "Looping pages",
    },
  },
  Methods: {
    screen: Methods,
    navigationOptions: {
      title: "Methods",
    },
  },
  MethodsWithLoop: {
    screen: MethodsWithLoop,
    navigationOptions: {
      title: "Methods with loop enabled",
    },
  },
  TouchableImages: {
    screen: TouchableImages,
    navigationOptions: {
      title: "Touchable images",
    },
  },
});

export default createAppContainer(AppNavigator);
