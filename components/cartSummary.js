import { StyleSheet, View, Text, Button, Pressable, FlatList } from "react-native";

function CartSummary() {
    return (
        <View>
            <Text>Price/Fees</Text>
            <View >
                <View style={styles.container}>
                    <Text>Item Total</Text>
                    <Text>$98.00</Text>
                </View>
                <View style={styles.container}>
                    <Text>Discount</Text>
                    <Text>$0.00</Text>
                </View>
                <View style={styles.container}>
                    <Text>Online Convenience Fee</Text>
                    <Text>$8.00</Text>
                </View>
                <View style={styles.container}>
                    <Text>Order Total</Text>
                    <Text>$100.00</Text>
                </View>
            </View>
            
        </View>
    )
}

export default CartSummary;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'left',
        flexDirection: "row",
        justifyContent: "space-between",
    },
})