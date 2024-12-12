import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import moment from 'moment';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { FontAwesome5 } from "@expo/vector-icons";

const OrderCart = () => {
  const route = useRoute();
  const time = moment().format('LT');
  return (
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>

      <View style={{ padding: 10, backgroundColor: 'orange' }}>
        <Text style={{ fontSize: 20, fontWeight: '700', color: 'white' }}>{route.params.restaurantname} has your order at {time}</Text>
      </View>
      <View style={{ borderColor: '#D8BFD8', borderWidth: 2, height: 2 }}></View>


      <View style={{ backgroundColor: '#FF033E', padding: 10, 
        alignItems: 'center', justifyContent: "centre",
        width:200,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:10,
        borderRadius: 7,
        flexDirection: 'row', 
        alignItems: 'center',
        }}>

        <MaterialCommunityIcons name="timer-outline" size={24} color="white" />
        <Text style={{ color: 'white' }}> Delivery in 30 mins </Text>

      </View>
       
       <View style={{ padding: 15, 
        alignItems: 'center', 
        justifyContent: "centre", 
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:9,
        borderRadius: 7,
        flexDirection: 'row', 
        alignItems: 'center',
        }} > 
      <Text style={{color:'#DE3163',fontSize:16,fontWeight:'bold'}}>Food preparation will begin shortly </Text>
      <MaterialCommunityIcons name="food-fork-drink" size={24} color="#DE3163" />
      </View> 
      
      <View style={{alignItems:'center',marginBottom:-10}}>
      <Image
              style={{width:270,height:240,}}
                 source={require('../Viewcart/jo.jpg')}
                
              /> 
      </View>
      <View style={{ borderColor: '#E8E8E8', borderWidth: 2, height: 1 }} />

      <View style={{ padding: 15, 
        alignItems: 'center', 
        justifyContent: "centre", 
        flexDirection: 'row', 
        alignItems: 'center',
        }}
      
      
      >
          <Image
                 style={{width:60,height:60,borderRadius:30}}
                    source={require('../Viewcart/icon.png')}
                   
                 />
        <View style={{paddingLeft:4,marginTop:10}}>
           <Text style={{color:'#DE3163',fontSize:16,fontWeight:'bold'}}>4 Valets near the restaurant</Text>
           <Text  style={{color:'#D8BFD8',fontSize:15,fontWeight:'bold'}}>Anyone will pick  your order</Text>

        </View>

      </View>

        <View style={{ borderColor: '#E8E8E8', borderWidth: 2, height: 1 }} />

        <View style={{ padding: 20, flexDirection: "row" }}>
          <FontAwesome5 name="hand-holding-heart" size={28} color="#ff0080" />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{ fontSize: 19, fontWeight: "bold", paddingHorizontal: 2 }}
            >
              Tip your hunger Saviour
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#696969",
                marginRight: 10,
                paddingHorizontal: 2,
              }}
            >
              Thank your delivery partner for helping you stay safe
              indoors.Support them through these tough times with a tip
            </Text>
          </View>
          </View>
    </SafeAreaView>
  )
}

export default OrderCart

const styles = StyleSheet.create({})