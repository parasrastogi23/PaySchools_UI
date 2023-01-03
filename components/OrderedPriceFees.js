import { Text, View, StyleSheet } from "react-native";

function OrderedPriceFees() {
  return (
    <View>
      <View style={styles.table}>
        <View>
          <Text>Tickets</Text>
        </View>
        <View>
          <Text style={styles.noAndPrice}>$98.00</Text>
        </View>
      </View>
      <View style={styles.table}>
        <View>
          <Text>Online Convenience Fees</Text>
        </View>
        <View>
          <Text style={styles.noAndPrice}>$2.50</Text>
        </View>
      </View>
      <View style={styles.table}>
        <View>
          <Text style={styles.orderTotal}>Order Total</Text>
        </View>
        <View>
          <Text style={styles.orderTotal}>$100.00</Text>
        </View>
      </View>
    </View>
  );
}

export default OrderedPriceFees;

const styles = StyleSheet.create({
  table: {
    flex: 1,
    alignItems: "left",
    backgroundColor: "#ffff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '93%',
  },
  noAndPrice: {
    color: "#1D1B1A",
    fontWeight: "bold",
  },
  orderTotal:{
    fontWeight:'bold',
    fontSize:'larger'
  }
});
