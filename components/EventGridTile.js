import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Platform,
  Image,
} from "react-native";

function EventGridTile({ title, color, GridPress }) {
  return (
    <View style={styles.outerView}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={GridPress}
      >
        <Image
          style={styles.logo}
          source={{
            uri: title,
          }}
          resizeMode={"stretch"}
        />
        {/* <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View> */}
      </Pressable>
    </View>
  );
}

export default EventGridTile;

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  outerView: {
    flex: 1,
    margin: 10,
    elevation: 4,
    borderRadius: 5,
    height: 100,
    shadowColor: "white",
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 6,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  buttonPressed: {
    opacity: 0.5,
  },

  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 15,
    borderRadius: 5,
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
