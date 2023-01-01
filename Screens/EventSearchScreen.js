import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import EventGridTile from "../components/EventGridTile";
import { CATEGORIES } from "../data/dummy-data";
import SearchBar from "../components/Searchbar";

function EventSearchScreen({ navigation }) {
  function renderEvents(itemData) {
    function pressHandler() {
     navigation.navigate("EventDetails");
     //navigation.navigate("ChooseOrder");
      console.log("navigation Success");
    }
    return (
      <EventGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        GridPress={pressHandler}
      />
    );
  }

  return (
    
    <View style={styles.rootContainer}>
      <View style={styles.ImageContainer}>
        
        <Image
          source={require("../assets/logo-white.png")}
          style={styles.Imagestyle}
        />
        
      </View>
      <View style={styles.searchBar}>
        <SearchBar />
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
   
  );
}

export default EventSearchScreen;

const styles = StyleSheet.create({
  Imagestyle: {
    width: 350,
    height: 150,
  },

  rootContainer: {
    flex: 1,
  },

  searchBar: {

    borderColor: "black",
    borderWidth: 2,
    height: '10%',
  },
  ImageContainer: {
    backgroundColor:'black'
  },

  eventContainer:{

  }
});
