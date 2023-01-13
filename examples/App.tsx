import React from "react";
import { Button, ScrollView, Text, TextStyle } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
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
  CustomMergeStyles,
  CustomWidth,
  DisabledControls,
  Loop,
  Methods,
  MethodsWithLoop,
  TouchableImages,
} from "./components";

type Props = NativeStackScreenProps<any, any, any>;
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
          onPress={(): void => {
            navigation.navigate("CustomMergeStyles");
          }}
          title="Custom styling merging with defaults"
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

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Autoplay" component={Autoplay} options={{ title: "Autoplay with loop" }} />
        <Stack.Screen name="AutoplayVertical" component={AutoplayVertical} options={{ title: "Autoplay (vertical)" }} />
        <Stack.Screen name="AutoplayWithoutLoop" component={AutoplayWithoutLoop} options={{ title: "Autoplay without loop" }} />
        <Stack.Screen name="Basic" component={Basic} options={{ title: "Basic" }} />
        <Stack.Screen name="Basic2Carousels" component={Basic2Carousels} options={{ title: "2 carousels on the same page" }} />
        <Stack.Screen name="BasicVertical" component={BasicVertical} options={{ title: "Vertical" }} />
        <Stack.Screen name="CustomHeight" component={CustomHeight} options={{ title: "Custom height with default width" }} />
        <Stack.Screen name="CustomIndex" component={CustomIndex} options={{ title: "Custom start page (page 2)" }} />
        <Stack.Screen name="CustomRender" component={CustomRender} options={{ title: "Custom next/prev/dot elements" }} />
        <Stack.Screen name="CustomSize" component={CustomSize} options={{ title: "Custom height and width" }} />
        <Stack.Screen name="CustomStyles" component={CustomStyles} options={{ title: "Custom styling" }} />
        <Stack.Screen name="CustomMergeStyles" component={CustomMergeStyles} options={{ title: "Custom styling merging with defaults" }} />
        <Stack.Screen name="CustomWidth" component={CustomWidth} options={{ title: "Custom width with default height" }} />
        <Stack.Screen name="DisabledControls" component={DisabledControls} options={{ title: "Autoplay with hidden prev/next buttons" }} />
        <Stack.Screen name="Loop" component={Loop} options={{ title: "Looping pages" }} />
        <Stack.Screen name="Methods" component={Methods} options={{ title: "Methods" }} />
        <Stack.Screen name="MethodsWithLoop" component={MethodsWithLoop} options={{ title: "Methods with loop enabled" }} />
        <Stack.Screen name="TouchableImages" component={TouchableImages} options={{ title: "Touchable images" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
