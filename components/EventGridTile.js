import { View, Text, Pressable, StyleSheet } from "react-native";

function EventGridTile({ title, color }) {
  return (
    <View style={styles.outerView}>
      <Pressable>
        <View>
          <Text>{title}</Text>
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
  },
});
