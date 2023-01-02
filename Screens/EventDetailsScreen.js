import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import { EventDetails } from '../components/EventDetails'; 
import { EventDescription } from '../components/eventDescription'

const EventDetailsScreen = () =>{
    const onBackPress = () =>{

    }

    return (
            <ScrollView>
                <View style={{flex:1}}>
                    {/* <Button title="Back" onPress={ onBackPress }/> */}
                    <View style={ styles.container }>
                        <EventDescription></EventDescription>
                        <EventDetails></EventDetails>  
                    </View>          
                </View>
            </ScrollView>)
}

export default EventDetailsScreen;

const styles = StyleSheet.create({
    container : {
        padding: 15
    }
})