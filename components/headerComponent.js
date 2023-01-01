import { View, Text, Image, StyleSheet } from "react-native";

function HeaderComponent() {
  return (
    <View style={styles.rootcontainer}>
      <View>
        <Image
          source={require("../assets/logo-white.png")}
          style={styles.Image}
          resizeMode={'contain'}
        />
      </View>
      <View>
        <Text> Language DropDown</Text>
      </View>
      <View>
        <Text> Cart Icon</Text>
      </View>
      <View>
        <Text> Side Menu</Text>
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
    height:50,
    marginLeft:10
  },
  Imagestyle: {
    width: 350,
    height: 150,
  },
});
