import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import EventGridTile from "../components/EventGridTile";
import { CATEGORIES } from "../data/dummy-data";
import SearchBar from "../components/Searchbar";
import HeaderComponent from "../components/headerComponent";
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons'; 


function searchEvent(){
      console.log('search applied');
}
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

   function cartPressHandler() {
       navigation.navigate("CartScreen");
    }

  return (
    
    <ImageBackground source={require("../assets/background-application.png")}>
      <View style={styles.rootContainer}>
      

        <View>
          <HeaderComponent />
        </View>
        <View style={styles.searchBar}>
          <SearchBar searchPress={searchEvent}/>
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
    height: '10%',
  },
  ImageContainer: {
    // backgroundColor:'black'
  },

  eventContainer: {},
});
