import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./tabnavigator";
import PostScreen from "../screens/postScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
 return (
 <Stack.Navigator
   initialRouteName="Home"
    screenOptions={{
    headerShown: false
     }}
    >
   <Stack.Screen name="Home" component={TabNavigator} />
   <Stack.Screen name="PostScreen" component={PostScreen} />
  </Stack.Navigator>
    );
};

export default StackNavigator;