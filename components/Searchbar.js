import { View, TextInput, Text, StyleSheet, Pressable } from "react-native";

function SearchBar() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.eventText}>Event Search</Text>
      <TextInput placeholder="Keywords"  style={styles.keywordsInput}/>
      <TextInput placeholder="Category, events,Org..."  style={styles.eventsInput}/>
      <View>
        <Pressable style={styles.searchButton}>
        <Text style={styles.searchText}> Search</Text>
        </Pressable>
        
      </View>
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor:'black'
  },

  eventText:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
    margin:20
  },

  keywordsInput: {
    borderColor: "white",
    borderWidth: 1,
    padding: 2,
    margin:20,
    color:'white',
  },

  eventsInput: {
    borderColor: "white",
    borderWidth: 1,
    padding: 2,
    margin:20,
    color:'white',
  },

  searchText:{
    margin:20,
    color:'white',
  },
  searchButton:{
    flex:1
  }
});
