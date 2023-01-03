import { StyleSheet, Text, View } from "react-native";
import DiscountSection from "../components/DiscountSection";
import OrderedItems from "../components/orderedItems";
import OrderedPriceFees from "../components/OrderedPriceFees";

function OrderedPreviewScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "grey",
            padding: 4,
          }}
        >
          <Text style={styles.innerText}>Order Preview</Text>
        </View>
        {/* <FlatList data={CARTITEMS} keyExtractor={(item) => item.id} renderItem={renderCartItem}/> */}
        <OrderedItems />
      </View>
      <View style={styles.discountContainer}>
        <View style={{ marginLeft: "5%",flexDirection:'column' }}>
          <View>
          <Text style={styles.innerText}>Discount Code</Text>
          <DiscountSection />
          </View>
          <View style={{marginTop:"5%"}}>
          <Text style={styles.innerText}>Price/Fees</Text>
          <OrderedPriceFees />
          </View>
        </View>
      </View>
    </View>
  );
}

export default OrderedPreviewScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "left",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 30,
    borderWidth: 1,
    borderColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    height: "110%",
  },
  innerText: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    fontWeight: "600",
    fontSize: 20,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 20,
  },
  discountContainer: {
    flexDirection: "column",
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    padding: 4,
    width: "114%",
    marginLeft: "-7%",
    height: "15%",
  },
});
