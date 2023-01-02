import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function HeaderComponent() {
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
          <Text> Language DropDown</Text>
        </View>
        <View style={styles.carticon}>
          <FontAwesome name="cart-plus" size={24} color="white" />
        </View>
        <View style={styles.evenflex}>
          <Text> Side Menu</Text>
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
});
