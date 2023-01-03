import { View, Text, StyleSheet,Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export const EventDetails = () =>{
    return (
        <View>
            <Text style={styles.title}>Event Details</Text>
            <View style={ styles.imageContainer }>
                <Image
                    style= {styles.image}
                    source={require('../assets/teamLogo.png')}/>
            </View>
            <View style={styles.dateContainer}>
                <View style={styles.startDate}>
                    <Text style={styles.dateTitle}>START DATE</Text>
                    <Text>Sep 16 2022</Text>
                </View>
                <View>B</View>
                <View style={styles.endDate}>
                    <Text style={styles.dateTitle}>END DATE</Text>
                    <Text>Oct 02 2022</Text>
                </View>
            </View>
            <View style={styles.venuContainer}>
                <View></View>
                <View>
                    <View style={ styles.subTitle}>VENU</View>
                    <View style={{ width:150}}>Washington High School Football Stadium 12345 6th street Jsmith@gmail.com Somewhere,OH 12345</View>
                </View>
            </View>
            <View style={{backgroundColor: '#F0F0F0'}}>
                <Text style={styles.title}>Event Dates</Text>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    title :{
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 10
    },
    image:{
        width: '50%',
        height: 200,
        // alignItems:
        justifyContent: 'center'
        // resizeMode: 'cover'
    },
    imageContainer:{
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#F0F0F0'
    },
    dateContainer:{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'transparent',
        borderTopColor:'darkgray',
        borderBottomColor:'darkgray',
        flex:1,
        paddingBottom:20
    },
    startDate: {
        flex: 1,
        textAlign: 'left'
    },
    endDate: {
        flex:1,
        textAlign:'right'
    },
    dateTitle:{
        fontWeight: 'bold'
    },
    subTitle: {
        fontWeight: 'bold'
    },
    venuContainer: {
        flexDirection: 'row',
        flex:1,
        paddingBottom:55
    }
})
