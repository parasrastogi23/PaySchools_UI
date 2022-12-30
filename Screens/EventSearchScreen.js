import { View, Text, TextInput, FlatList, Image ,StyleSheet } from "react-native";
import EventGridTile from "../components/EventGridTile";
import { CATEGORIES } from "../Data/dummy-data";
import SearchBar from "../components/Searchbar";

function EventSearchScreen({ navigation }) {
  function renderEvents(itemData) {
    function pressHandler() {
      navigation.navigate('EventDetails');
      console.log('navigation Success');
    }
    return (
      <EventGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View style ={styles.rootContainer}>
      {/* <View>
      <Image source={require('../assets/psc-logo.png')} style={styles.Imagestyle} />
      </View> */}
      <View style={styles.searchBar}>
        <SearchBar />
      </View>
     <View>
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

const styles= StyleSheet.create({

  Imagestyle:{
    width:350,
    height:150,
  },

  rootContainer:{
flex: 1
  },

  searchBar:{
    flex:1,
    borderColor: 'black',
    borderWidth:2,
    marginTop:25,
  }
});
