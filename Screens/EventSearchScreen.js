import { View, FlatList, StyleSheet, ImageBackground, Button } from "react-native";
import EventGridTile from "../components/EventGridTile";
import { CATEGORIES } from "../data/dummy-data";
import SearchBar from "../components/Searchbar";
import HeaderComponent from "../components/headerComponent";

function searchEvent() {
  console.log("search applied");
}
function EventSearchScreen({ navigation }) {
  function renderEvents(itemData) {
    function pressHandler() {
      navigation.navigate("EventDetails");
      //navigation.navigate("ChooseOrder");
      // console.log("navigation Success");
    }

    return (
      <EventGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        GridPress={pressHandler}
      />
    );
  }

  function cartPressHandler() {
    navigation.navigate("CartScreen");
  }

  function viewTicketSummary(){
    console.log('enter in ticketSummary func')
    navigation.navigate("OrderedPreview");
  }

  return (
    <ImageBackground source={require("../assets/background-application.png")}>
      <View style={styles.rootContainer}>
        <View>
          <HeaderComponent CartPress={cartPressHandler} />
        </View>
        <View style={styles.searchBar}>
          <SearchBar searchPress={searchEvent} />
        </View>
        <View>
          <Button title="Ticket Summary" style={styles.ticketSummary} onPress={viewTicketSummary} />
        </View>
        <View style={styles.eventContainer}>
          <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderEvents}
            numColumns={2}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

export default EventSearchScreen;

const styles = StyleSheet.create({
  Imagestyle: {
    width: 100,
    height: 40,
  },

  rootContainer: {
    flex: 1,
  },

  searchBar: {
    borderColor: "black",
    borderWidth: 2,
    height: "10%",
  },
  ImageContainer: {
    // backgroundColor:'black'
  },
  ticketSummary: {
    left: "100%",
    backgroundColor: "#FF8629",
    height: 100,
    width: 100,
    borderRadius: 5,
    marginVertical: 40,
    backgroundColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center"
  },

  eventContainer: {},
});
