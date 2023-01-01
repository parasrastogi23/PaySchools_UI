// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from "react-native";
import GoalItem from "./components/goalItems";
import EventSearchScreen from "./Screens/EventSearchScreen";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventDetailsScreen from "./Screens/EventDetailsScreen";

export default function App() {
  const stack = createNativeStackNavigator();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };
  console.log("Heloo world");

  return (
    <>
      {/* <SafeAreaView>
      <StatusBar style="light" /> */}
      {/* <ImageBackground source={require("./assets/background-application.png")}> */}
      <NavigationContainer theme={MyTheme}>
        <stack.Navigator initialRouteName="Dashboard">
          <stack.Screen
            name="Dashboard"
            component={EventSearchScreen}
            options={{
              title: "Dashboard",
              headerShown: false
            }}
          />
          <stack.Screen name="EventDetails" component={EventDetailsScreen} />
        </stack.Navigator>
      </NavigationContainer>
      {/* </ImageBackground> */}
      {/* <View>
          <EventSearchScreen />
        </View>
      
      </SafeAreaView> */}
    </>
  );
}

const styles = StyleSheet.create({});
