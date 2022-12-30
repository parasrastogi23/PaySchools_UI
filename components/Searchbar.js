import { View, TextInput, Text, StyleSheet, Pressable , Dimensions} from "react-native";

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
const deviceWidth = Dimensions.get('window').width; 
export default SearchBar;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: deviceWidth < 550 ? 'column' : 'row',
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
    margin:5,
    color:'white',
   
  },

  eventsInput: {
    borderColor: "white",
    borderWidth: 1,
    padding: 2,
    margin:5,
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
