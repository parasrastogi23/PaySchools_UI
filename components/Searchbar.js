import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

function SearchBar({searchPress}) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.eventText}>Event Search</Text>
      <TextInput placeholder="Keywords" style={styles.keywordsInput} />
      <TextInput
        placeholder="Category, events,Org..."
        style={styles.eventsInput}
      />
      <View>
        <Pressable style={styles.searchButton} onPress={searchPress}>
          <View style={styles.searchView}>
            <FontAwesome5 name="search" size={18} color="white" />
            <Text style={styles.searchText}> Search</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
const deviceWidth = Dimensions.get("window").width;
export default SearchBar;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: deviceWidth < 550 ? "column" : "row",
    backgroundColor: "#000000",
  },

  searchView: {
    flexDirection: "row",
    marginTop: 20,
    color: "white",
    backgroundColor: "teal",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    width: 100,
    height: 30,
    padding: 2,
  },

  eventText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    margin: 20,
  },

  keywordsInput: {
    borderColor: "white",
    borderWidth: 1,
    padding: 2,
    margin: 20,
    color: "white",
    borderRadius: 5,
    height: 30,
    padding: 2,
  },

  eventsInput: {
    borderColor: "white",
    borderWidth: 1,
    padding: 2,
    margin: 20,
    color: "white",
    borderRadius: 5,
    height: 30,
    padding: 2,
  },

  searchText: {
    // marginTop: 20,
    color: "white",
    // backgroundColor: "teal",
    // borderColor: "white",
    // borderWidth: 2,
    // borderRadius: 5,
    // width: 100,
    // height: 30,
    // padding: 2,
  },
  searchButton: {
    flex: 1,
  },
});
