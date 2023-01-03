import { Button, StyleSheet, TextInput, View } from "react-native";

function DiscountSection() {
  return (
    <View style={styles.MainDiscountSection}>
      <TextInput
        style={styles.textInput}
      ></TextInput>
      <Button color="#3CBFAE" style={styles.applyButton} title="Apply"/>
    </View>
  );
}

export default DiscountSection;

const styles = StyleSheet.create({
    MainDiscountSection:{
      flexDirection:'row',
    //   margin:10
    },
    textInput:{
        color:'black',
        borderColor:'black',
        borderRadius:10,
        width:'70%',
        borderWidth:1,
        marginRight:10,
    },
    applyButton:{
        backgroundColor:'#3CBFAE',
        color:'#FFFFFF',
        borderRadius:'10%',
        marginLeft:10,
    }
})