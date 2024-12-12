import { StyleSheet, Text, View, Pressable, TouchableOpacity,ScrollView} from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import menudata from '../data/menudata';
import RestaurantMenu from '../Restaurants/RestaurantMenu';
import { CartItems } from '../../../Context';
import Viewcart from '../Viewcart/Viewcart';

const Cartitems = () => {
  const data=menudata;
  const route = useRoute();

  //using this statement before using without usecontext hooks so using params to pass out the data
  //to display paramaters which provides in the Hotels.js <Text>{route.params.id}</Text>
  //console.log(route.params);

  const navigation = useNavigation();
  const {Cart,setCart} = useContext(CartItems);
  
  //this statement is used as to render the items present in the cart
  //console.log(Cart,"cartitems added");
  //console.log(Cart.length,"no of items added");
  
  return (
    <>
            <ScrollView>
            <SafeAreaView>
      <Pressable style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', }}>
        <Pressable onPress={() => navigation.navigate('Dashbord')} >
          <Ionicons style={{ marginRight: 10, }} name="arrow-back-circle-sharp" size={54} color="black" />
        </Pressable>

        <Pressable style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', width: '30%', marginRight: 20, gap: 10 }} >

          <Ionicons name="camera-outline" size={34} color="black" />
          <MaterialIcons name="bookmark-outline" size={34} color="black" />
          <Feather style={{ marginRight: 12 }} name="share-2" size={30} color="black" />


        </Pressable>

      </Pressable>

      <View  >
        <View style={{ marginTop: 10, marginLeft: 4 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30 }} >{route.params.name}</Text>
          <Text style={{ fontWeight: '500', fontSize: 19, color: 'grey' }}>{route.params.cuisines}</Text>
          <Text style={{ fontWeight: '500', fontSize: 19, color: '#002244' }}>{route.params.smalladress}</Text>
        </View>

        <View style={{ flexDirection: 'row', gap: 10, marginLeft: 5, marginTop: 2 }}  >
          <View style={{ flexDirection: 'row', alignItems: 'center', width: 110, backgroundColor: '#17B169', padding: 8, justifyContent: 'center', gap: '4', borderBottomLeftRadius: 7, borderTopLeftRadius: 7, width: 90, height: 40 }}>
            <Text style={{ color: "yellow", fontWeight: 'bold', fontSize: 13 }}>{route.params.aggregate_rating}</Text>
            <AntDesign name="star" size={24} color="yellow" />
          </View>

          <View style={{ alignItems: 'center', backgroundColor: '#FF00BF', justifyContent: 'center', borderBottomLeftRadius: 7, borderTopLeftRadius: 7, width: 90, height: 40 }}>
            <Text style={{ color: "yellow", fontSize: 14, fontWeight: 'bold' }}>30</Text>
            <Text style={{ color: "yellow", fontSize: 14, fontWeight: 'bold' }}>PHOTOS</Text>
          </View>
        </View>

      </View>

      <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialIcons style={{ backgroundColor: '#c7c7d0', padding: 4 }} name="delivery-dining" size={24} color="black" />
          <View style={{ marginLeft: 4 }}>
            <Text>Mode</Text>
            <Text>deliver</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons style={{ backgroundColor: '#c7c7d0', padding: 4 }} name="timer-outline" size={24} color="black" />
          <View style={{ marginLeft: 4 }}>
            <Text>Time</Text>
            <Text>30mins or free</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
          <MaterialIcons style={{ backgroundColor: '#c7c7d0', padding: 4 }} name="local-offer" size={24} color="black" />
          <View style={{ marginLeft: 4 }}>
            <Text>Offers</Text>
            <Text>View all</Text>
          </View>
        </View>
      </View>

      <View style={{
        flexDirection: 'row', marginRight: 10, marginLeft: 10, marginTop: 15,
        backgroundColor: '#c6c6c8', alignItems: 'center', padding: 5, borderRadius: 7
      }}>
        <Fontisto style={{ padding: 5 }} name="motorcycle" size={24} color="black" />
        <Text style={{ padding: 5 }}>₹40 additional distance fee</Text>
      </View>
       
       <View>
       <View style={{
        flexDirection: 'row',alignItems: 'center', margin:10,gap:5,marginLeft:15}}>
       <Text style={{fontSize:24,fontWeight:'500'}}>Menu List</Text>
       <MaterialIcons style={{fontWeight:'500'}} name="restaurant-menu" size={24} color="black" />
       </View>
       <Text style={{borderColor:'#FFC0CB',width:150,height:2,borderWidth:2,marginLeft:15,marginTop:-5}}></Text>
       </View>


       {data.map((item) => <RestaurantMenu Cart={Cart} setCart={setCart} key={item.id} menu={item}/>)}
       
       </SafeAreaView>
      </ScrollView>
 
      <Viewcart  Restaurantname={route.params.name} key={route.params.id}/>
    </>
  )
}

export default Cartitems

const styles = StyleSheet.create({})