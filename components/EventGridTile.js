import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

function EventGridTile({ title, color }) {
  return (
    <View style={styles.outerView}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={[styles.innerContainer,{ backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default EventGridTile;

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    margin: 20,
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
