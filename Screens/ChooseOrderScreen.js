import { View, FlatList, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-web";
import EventGridTile from "../components/EventGridTile";
import { CATEGORIES } from "../data/dummy-data";

function ChooseOrderScreen(){

    function renderEvents(itemData) {
        function pressHandler() {
         // navigation.navigate("EventDetails");
         navigation.navigate("ChooseOrder");
          console.log("navigation Success");
        }
        return (
          <EventGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            GridPress={pressHandler}
          />
        );
      }


    return (
    
        <View style={styles.rootContainer}>
            <View style={styles.eventContainer}>
                <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderEvents}
                numColumns={1}
                />
            </View>
            <View style={styles.secondContainer}>
                <View style={styles.eventContainer2}>
                    <View>
                        <Text style={styles.subHeader}>General Information</Text>
                    </View>
                        <View style={styles.eventContainer3}>
                                <View style={styles.container5}>
                                    <View>
                                        <Text style={styles.inputSubHeader}>Parent/Guardian Name</Text>
                                        <TextInput style={styles.input} />
                                    </View>
                                    <View>
                                        <Text style={styles.inputSubHeader}>Contact Number</Text>
                                        <TextInput style={styles.input} />
                                    </View>
                                    <View>
                                        <Text style={styles.inputSubHeader}>Email Id</Text>
                                        <TextInput style={styles.input} />
                                    </View>                              
                                </View>

                        </View>
                        <Text style={styles.subHeader}>Ground  Floor</Text>
                        <View style={styles.eventContainer4}>
                            <TextInput />
                        </View>
                </View>
            </View>
          
        </View>
       
      );
}

export default ChooseOrderScreen;

const styles = StyleSheet.create({
    Imagestyle: {
      width: 350,
      height: 150,
    },
  
    rootContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    ImageContainer: {
      backgroundColor:'black'
    },
  
    eventContainer:{
        flex:2,
    },
    secondContainer:{
        flex:3
    },
    eventContainer2:{
        flex:1,
        backgroundColor: '#efefef',
        padding:20,
       // alignItems:'center',
    },
    eventContainer3:{
        flex:1,
        backgroundColor: 'white',
        height:200,
        width: '100%',
        borderRadius:20,
        marginBottom:20,
        
    },
    eventContainer4:{
        flex:3,
        backgroundColor: 'white',
        height:200,
        width: '90%',
        borderRadius:20,
    },

    container5: {
        height: 300,
        backgroundColor:'cccccc',
        flexDirection: 'row',
    },
    subHeader:{
        alignItems:'left',
        paddingBottom:10,
        fontSize: 19,
        fontWeight:700,
    },
    input: {
        height: 40,
        margin: 6,
        borderWidth: 1,
        borderRadius:5,
        borderColor: '#cbc7c7',
        padding: 10,
      },
      inputSubHeader:{
        alignItems:'left',
        padding:10,
        fontSize: 12,
        fontWeight:700,
    },
  });