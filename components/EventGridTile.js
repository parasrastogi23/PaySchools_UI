import { View, Text, Pressable, StyleSheet } from "react-native";

function EventGridTile({ title, color }) {
  return (
    <View style={[styles.outerView, {backgroundColor:color}]}>
      <Pressable style={styles.button} android_ripple={{color:'#ccc'}}>
        <View style={styles.innerContainer}>
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
  },

  button:{
    flex:1
  },
  innerContainer:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    padding:15
  },

  title:{
    fontWeight:'bold',
    fontSize:18
  }
});
