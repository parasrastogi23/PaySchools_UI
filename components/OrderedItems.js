import { ScrollView, StyleSheet, Text, View } from "react-native";

function OrderedItems(){
    return(
        <View>
          <View style={styles.table}>
            <View>
              <Text style={styles.noAndPrice}>1</Text>
            </View>
            <View>
              <Text>General Entry</Text>
            </View>
            <View>
              <Text style={styles.noAndPrice}>$8.00ea</Text>
            </View>
          </View>
          <View style={styles.table}>
            <View>
              <Text style={styles.noAndPrice}>2</Text>
            </View>
            <View>
              <Text>Table Lamp</Text>
            </View>
            <View>
              <Text style={styles.noAndPrice}>$5.00ea</Text>
            </View>
          </View>
          <View style={styles.table}>
            <View >
              <Text style={styles.noAndPrice}>3</Text>
            </View>
            <View>
              <Text>Balcony</Text>
            </View>
            <View>
              <Text style={styles.noAndPrice}>61.00ea</Text>
            </View>
          </View>
          <View style={styles.table}>
            <View>
              <Text style={styles.noAndPrice}>4</Text>
            </View>
            <View>
              <Text>Farm House</Text>
            </View>
            <View>
              <Text style={styles.noAndPrice}>$200.00</Text>
            </View>
          </View>
          <View style={styles.table}>
            <View>
              <Text style={styles.noAndPrice}>1</Text>
            </View>
            <View>
              <Text>General Entry</Text>
            </View>
            <View>
              <Text style={styles.noAndPrice}>$8.00ea</Text>
            </View>
          </View>
        </View>
    );
}

export default OrderedItems;

const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      flex: 2,
      alignItems: "left",
      backgroundColor: "#fff",
      marginHorizontal: 20,
      marginVertical: 30,
      borderWidth: 1,
      borderColor: "grey",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
  
    table: {
      flex: 1,
      alignItems: "left",
      backgroundColor: "#ffff",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    title: {
      width: "50%",
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
    noAndPrice: {
      color: "#1D1B1A",
      fontWeight:'bold'
    },
  });
