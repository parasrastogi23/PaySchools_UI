import { StyleSheet, View, Text, Button, Pressable,FlatList } from "react-native";



function CartItems({ itemList, date, schoolName }) {
  const Item = ({ title, price, quantity, subTotal }) => (
    <View>
    
  <View style={styles.table}>
    <View>
      <Text>{title}</Text>
      </View>
      <View>
      <Text>${price}</Text>
      </View>
      <View>
      <Text>{quantity}</Text>
      </View>
      <View>
      <Text>${subTotal}</Text>
    </View>
  </View>
    </View>
    
  
  );
  const renderItem = ({ item }) => (
    <Item title={item.items} price={ item.price} quantity={item.quantity } subTotal={item.subTotal } />
  );
  return (
    <View>
      <View style={styles.container}>
            <View style={styles.title}>
              <Text>{schoolName}</Text>
            </View>
            <View>
              <Text>Event Date</Text>
              <Text>{date}</Text>
            </View>
      </View>
      <View>
        <View style={styles.table}>
          <View>
          <Text>Item</Text>
          </View>
          <View>
          <Text>Price</Text>
          </View>
          <View>
          <Text>Quantity</Text>
          </View>
          <View>
          <Text>Sub Total</Text>
        </View>
        </View>
        <FlatList data={itemList} keyExtractor={(item) => item.id} renderItem={renderItem}/>
      </View>
    </View>
        
    );
}

export default CartItems;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'left',
    backgroundColor: '#dfdfdf',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal:10
  },
  table: {
    flex:1,
    alignItems: 'left',
    backgroundColor: '#ffff',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dfdfdf',
  },
  title: {
    width:'50%'
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