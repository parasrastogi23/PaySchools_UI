import { CARTITEMS} from '../data/dummy-data';
import { FlatList } from 'react-native';
import CartItems from '../components/cart-Items';
import CartSummary from '../components/cartSummary'
import { View,Text,StyleSheet } from "react-native";

function renderCartItem(itemData) {
    return <CartItems itemList={itemData.item.itemList}
        date={itemData.item.date} schoolName={itemData.item.schoolName} id={ itemData.item.id} />
}

function CartCheckoutScreen() {
    return (
        <View style={styles.container}>
            <View >
                <Text>Items in Cart</Text>
                <FlatList data={CARTITEMS} keyExtractor={(item) => item.id} renderItem={renderCartItem}/>
            </View>
             <View>
                <Text>Summary</Text>
                <CartSummary/>
            </View>
        </View>
    )
}

export default CartCheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flex:2,
    alignItems: 'left',
    
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginVertical: 30,
    borderWidth: 1,
    borderColor: "grey",
        paddingVertical: 10,
        paddingHorizontal:20,
    borderRadius:10
    
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