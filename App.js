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
} from "react-native";
import GoalItem from "./components/goalItems";
import EventSearchScreen from "./Screens/EventSearchScreen";

export default function App() {
  const [enteredEventText, setEnteredEventText] = useState("");
  const [events, setEvents] = useState([]);

  function inputHandler(enteredText) {
    setEnteredEventText(enteredText);
  }

  function addEvent() {
    setEvents((events) => [...events, enteredEventText]);
  }

  console.log("Heloo world");

  return (
    <>
      <StatusBar style="light" />
      <ImageBackground source={require("./assets/background-application.png")}>
        <View>
          <View style={{ marginTop: 50, marginLeft: 20 }}>
            <Text>
              <Text>My Orders</Text>
              <Text>My Orders</Text>
            </Text>
          </View>
          <TextInput placeholder="text here...." onChangeText={inputHandler} />
          <Button title="Add to Calendar" onPress={addEvent}></Button>
          <FlatList
            data={events}
            renderItem={(itemData) => {
              itemData.index;
              return <GoalItem text={itemData.item} />;
            }}
          ></FlatList>
          <EventSearchScreen />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({});
