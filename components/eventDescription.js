import { StyleSheet, View, Text,Image } from 'react-native';

export const EventDescription = () =>{
    return (
        <View>
            <Image
                style= {styles.image}
                source={require('../assets/ground.jpg')}
            />
            <Text style={styles.title}>Washington High School Varsity Football V/S Anywhere High School - FULL CHART</Text>
            <Text style= {{ marginTop: 10, fontSize:10 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat. Imperdiet massa tincidunt nunc pulvinar sapien… Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat. Imperdiet massa tincidunt nunc pulvinar sapien…Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat. Imperdiet massa tincidunt nunc pulvinar sapien.. Lorem ipsum dolor sit amet, consectetur adipiscing elit,             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat. Imperdiet massa tincidunt nunc pulvinar sapien….Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat. Imperdiet massa tincidunt nunc pulvinar sapien…Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat. Imperdiet massa tincidunt nunc pulvinar sapien…Lorem ipsum dolor sit amet, consectetur adipiscing elit, See More
            </Text>
            <View style={styles.finePrint}>
                <Text style={styles.fineHeader}>Event Fine Print</Text>
                <Text style={styles.fineBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. A diam maecenas sed enim ut sem. Nam libero justo laoreet sit amet cursus. Laoreet id donec. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. A diam maecenas sed enim ut sem. Nam libero justo laoreet sit amet cursus. Laoreet id donec</Text>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover'
      },
    title :{
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 10
    },
    finePrint: {
        backgroundColor: '#FFE4E4',
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    },
    fineHeader:{
        color: '#D16464',
        fontWeight: 'bold'
    },
    fineBody:{
        color: '#D16464',
        // fontSize: 10,
        marginTop: 10
    }
})