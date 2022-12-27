import { StyleSheet, View, Text, Button, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Pressable>
          <Text>text here</Text>
        </Pressable>
        <Button title="Add to Calendar"></Button>
      </View>
      <View style={styles.innerContainer}>
        <Text>{props.text}</Text>
        <Text>text here</Text>
        <Button title="Add to Calendar"></Button>
      </View>
    </View>
  );
}

console.log("test");

export default GoalItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: "column",
    borderWidth: 2,
    borderColor: "#000",
    padding: 20,
    borderRadius: 10,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 20,
  },
});
