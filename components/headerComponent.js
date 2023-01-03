import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
const languages = ["English", "Spanish"];

function HeaderComponent({ CartPress, selectSpanish }) {
  return (
    <View style={styles.rootcontainer}>
      <View style={styles.evenflex}>
        <Image
          source={require("../assets/logo-white.png")}
          style={styles.Image}
          resizeMode={"contain"}
        />
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.evenflex}>
          {/* <Pressable
          onPress={selectSpanish}
          style={{
            backgroundColor:'#d3d3d3',
            padding: 20,
          }}>
          <Text>Select spanish</Text>
        </Pressable> */}
          {/* <SelectDropdown
            data={languages}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          /> */}
        </View>
        <View style={styles.thirdcontainer}>
          <Pressable onPress={CartPress} style={styles.carticon}>
            <View style={styles.carticon}>
              <FontAwesome name="cart-plus" size={24} color="white" />
            </View>
          </Pressable>
          <View style={styles.sidemenu}>
            <Entypo name="menu" size={24} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}

export default HeaderComponent;

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    flexDirection: "row",
  },
  Image: {
    width: 100,
    height: 50,
    marginLeft: 10,
  },
  Imagestyle: {
    width: 350,
    height: 150,
  },

  evenflex: {
    flex: 1,
  },
  carticon: {
    flex: 1,
    paddingRight: 0,
  },
  secondContainer: {
    flex: 1,
    flexDirection: "row",
  },
  thirdcontainer: {
    flex: 1,
    flexDirection: "row",
  },

  sidemenu: {
    flex: 1,
    marginLeft: 25,
  },
});
