import { StyleSheet, TextInput, View, Button, Image, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import Categories from '../component/Categories/Categories';
import Menulist from '../component/menu/Menulist';
import Categorycard from '../component/itemsComponent/Categorycard';
import Hotels from '../component/data/Hotels';
import HotelsLayout from '../component/Restaurants/hotelsLayout';

const Dashbord = () => {
  const data =Hotels;
 
  return (
    <ScrollView>
    <SafeAreaView style={{ marginLeft: 2  }}>
      <View style={{ backgroundColor: "white", }}>
        <View style={{ marginTop: 15, flexDirection: "row", alignItems: "center", borderRadius: 10 }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 50, margin: 5 }}
            source={{
              uri: "https://logopond.com/logos/c47964b8a82be22fedadb42e05ac335e.png",
            }}
          />
          <View>
            <Text style={{ color: "grey", fontWeight: "bold", fontSize: 15 }}>Deliver Now</Text>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Current Location <Entypo name="chevron-thin-down" size={15} color="black" /></Text>
          </View>
          <Ionicons style={{ marginLeft: 65 }} name="person-outline" size={40} color="red" />

        </View>


        <View>

          <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center", borderRadius: 22, backgroundColor: "#D8D8D8", padding: 10, margin: 6 }}>
            <Feather name="search" size={34} color="grey" />
            <TextInput placeholder='Search Restaruent anf Dish' />
          </View>
        </View>
      </View>
     
      <Categories />
         <Menulist/>
         <Categorycard/>
          {data.map((item) => <HotelsLayout key={item.id} restaurant={item}/>)}
       
     </SafeAreaView>
    </ScrollView>
  )
}

export default Dashbord
