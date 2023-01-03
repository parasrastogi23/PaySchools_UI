// import { StatusBar } from "expo-status-bar";
import { View, Pressable, Text } from "react-native";
import React, { useState } from "react";
import i18n from "./assets/i18n/i18n";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import EventSearchScreen from "./Screens/EventSearchScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventDetailsScreen from "./Screens/EventDetailsScreen";

import CartCheckoutScreen from "./Screens/CartCheckoutScreen"
import OrderedPreviewScreen from "./Screens/OrderedPreviewScreen";

export default function App() {
  const stack = createNativeStackNavigator();
  const { t, i18n } = useTranslation();

  const [currentLanguage, setLanguage] = useState("en");

  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch((err) => console.log(err));
  };
  return (
    <>
      {/* <SafeAreaView>
      
      <StatusBar style="light" />
      <ImageBackground source={require("./assets/background-application.png")}> */}
      
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 25, color: "#33A850" }}>
          {t("select_Language")}
        </Text>
        <Pressable
          onPress={() => changeLanguage("en")}
          style={{
            backgroundColor: currentLanguage === "en" ? "#33A850" : "#d3d3d3",
            padding: 20,
          }}
        >
          <Text>English</Text>
        </Pressable>
        <Pressable
          onPress={() => changeLanguage("es")}
          style={{
            backgroundColor: currentLanguage === "es" ? "#33A850" : "#d3d3d3",
            padding: 20,
          }}
        >
          <Text>Español</Text>
        </Pressable>
      </View>
      <NavigationContainer>
        <stack.Navigator initialRouteName="Dashboard">
          <stack.Screen
            name="Dashboard"
            component={EventSearchScreen}
            options={{
              title: "Dashboard",
              headerShown: false,
            }}
          />
          <stack.Screen name="EventDetails" component={EventDetailsScreen} />
          <stack.Screen name="CartScreen" component={CartCheckoutScreen} />
          <stack.Screen name="OrderedPreview" component={OrderedPreviewScreen} />
        </stack.Navigator>
      </NavigationContainer>
      {/* <View>
          <EventSearchScreen />
        </View>
      
      </SafeAreaView> */}
    </>
  );
}

const styles = StyleSheet.create({});
