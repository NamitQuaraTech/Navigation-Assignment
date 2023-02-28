import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { StatusBar } from "expo-status-bar";
import Details from "./screens/Details";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#6200ff",
            },
            headerTintColor: "#ffffff",
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
};

const styles = StyleSheet.create({});
export default App;
