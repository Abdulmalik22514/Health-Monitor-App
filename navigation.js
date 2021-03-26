import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Events from "./screens/events";
import { createStackNavigator } from "@react-navigation/stack";
import Acknowledge from "./screens/acknowledge";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="events" component={Events} />
        <Stack.Screen name="acknowledge" component={Acknowledge} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
