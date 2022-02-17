import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeContainer from "screens/Home/HomeContainer";

const HomeStack = createNativeStackNavigator();

function HOME_STACK() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HOME" component={HomeContainer} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HOME_STACK />
    </NavigationContainer>
  );
}
