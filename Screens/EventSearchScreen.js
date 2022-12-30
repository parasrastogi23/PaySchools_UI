import { View, Text, TextInput, FlatList } from "react-native";
import EventGridTile from "../components/EventGridTile";
import { CATEGORIES } from "../Data/dummy-data";




function renderEvents (itemData){
return <EventGridTile title={itemData.item.title} color={itemData.item.color}/>;
}

function EventSearchScreen() {
  return (
    <View>
      <TextInput />
      <TextInput />
      <Text>Search</Text>
      <FlatList data={CATEGORIES}
      keyExtractor={(item)=> item.id}
      renderItem={renderEvents}
      numColumns={2}/>
    </View>

   
  );
}

export default EventSearchScreen;
