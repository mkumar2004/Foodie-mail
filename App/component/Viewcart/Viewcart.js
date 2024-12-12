import { Pressable, StyleSheet, Text, View, Modal, ScrollView,TouchableOpacity } from 'react-native'
import React, { useContext, useState,useEffect } from 'react'
import { CartItems } from '../../../Context';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';


const Viewcart = (props) => {
  const navigation=useNavigation();
  const [sound, setSound] = useState();
  const { Cart, setCart } = useContext(CartItems);
  const Total = Cart
    .map((item) => Number(item.price.replace("₹", "")))
    .reduce((prev, curr) => prev + curr, 0);

  //console.log("Total price",Total);

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../Viewcart/pay.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);


  const restaurantname = props.Restaurantname
  //console.log(restaurantname)
  const [Modals, setModel] = useState(false);
 
   const onpress =() =>{
    setModel(false);
    setCart([]);

    navigation.navigate("order",{restaurantname:restaurantname});

    setTimeout(()=>{
      playSound();
    },10)

   }

  const checkout = () => {
    return (
      <View style={{ justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)', flex: 1 }}>
        <Pressable style={{ alignItems: 'center', marginBottom: 10, }} onPress={() => setModel(false)}>
          <AntDesign name="closecircle" size={35} color="black" />
        </Pressable>
        <View style={{ height: 500, backgroundColor: '#F5F5F5', borderTopLeftRadius: 12, borderTopRightRadius: 12, }}>
          <Text style={{ textAlign: "center", marginTop: 10, color: 'red', fontSize: 18 }}>{restaurantname}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: 300, padding: 5 }}>
            <MaterialCommunityIcons name="timer-outline" size={24} color="green" />
            <Text style={{ paddingLeft: 5, fontWeight: '500', fontSize: 17 }}>Deliver in 30mins</Text>
          </View>
          <View style={{ borderColor: '#E8E8E8', borderWidth: 1, height: 1 }}>
          </View>
          <ScrollView>
          <View>
            {Cart.map((item, key) => (
              <View key={key} style={{
                flexDirection: 'row',
                justifyContent: 'space-between', alignItems: 'center', padding: 13
              }} >
                <Text style={{ color: '#E52B58', fontWeight: '500', fontSize: 16 }} >{item.name}</Text>
                <Text style={{ color: '#E52B58', fontWeight: '500', fontSize: 16 }} >{item.price}</Text>

              </View>
            ))}
          </View>
          <View style={{ borderColor: '#E8E8E8', borderWidth: 1, height: 1 }} />


          <View style={{ padding: 10,marginTop:-3 }}>
            <Text style={{ color: "blue", fontSize: 17 }}>Offers</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Fontisto name="ticket" size={24} color="green" />
              <Text style={{ color: '#E52B58', paddingLeft: 5,fontWeight: '500',fontSize: 16, }}>Special Promo code</Text>
            </View>

          </View>
           
          <View style={{ borderColor: '#E8E8E8', borderWidth: 1, height: 1 }} />

          <View style={{padding:5}} >
            <Text style={{fontWeight:'500',fontSize:16}}>Climate Conscious delivery</Text>
             <View>

              <View style={{padding:2,flexDirection:'row',alignItems:'center'}}>
              <Ionicons name="fast-food" size={24} color="#00AB66" />
              <View style={{marginLeft:5}}>  
                <Text style={{fontSize:14,color:'#4CBB17'}}>Dont send cultery,tissues and straws</Text>
               <Text style={{fontSize:13}}>Thank you for carring about the environment</Text>
              </View>
              
              </View>
             </View>

          </View>
          <View style={{ borderColor: '#E8E8E8', borderWidth: 1, height: 1 }} />
          
          <View style={{padding:5,flexDirection:'row',alignItems:'center'}} >
          <FontAwesome5 name="leaf" size={24} color="#004526" />
              <View style={{marginLeft:5}}>
                <Text style={{fontSize:13}}>We fund environment project to offset carbon foodprints delivery</Text>
              </View>
             
          </View>


          <View style={{ borderColor: '#E8E8E8', borderWidth: 2, height: 1 }} />
        
          <View style={{padding:10,backgroundColor:'#D0F0C0'}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginVertical:5}}>
              <Text>Item Total</Text>
              <Text>₹{Total}</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginVertical:5}}>
              <Text>Delivery Charge</Text>
              <Text>₹50</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginVertical:5}}>
              <Text>Dontation Pay</Text>
              <Text>₹30</Text>
            </View>

          </View>
          
          <View style={{ borderColor: '#E8E8E8', borderWidth: 2, height: 1 }} />


          </ScrollView>
          
          <View style={{padding:10,backgroundColor:'#F0E68C'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <Text style={{fontWeight:'bold',color:'red',fontSize:18}}>Grand Total</Text>
              <Text style={{fontWeight:'bold',color:'red',fontSize:17}}>₹{Total+30+50}</Text>
            </View>
          </View>
          
          <Pressable style={{backgroundColor:'red',padding:10}}
            
          >
          <TouchableOpacity onPress={onpress}>
            <Text style={{fontSize:18,color:'white',textAlign:'center',fontWeight:600}}>Place order</Text>
            </TouchableOpacity>
          </Pressable>
          
        
        </View>
        
      </View>
      
    );

  }
  return (
    <>
      <Modal

        animationType="slide"
        transparent={true}
        visible={Modals}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModel(!Modals);
        }}>
        {checkout()}
      </Modal>
      <View>
        {Total === 0 ? (
          null
        ) : (
          <Pressable
            onPress={() => setModel(true)}
            style={{ backgroundColor: "orange", width: 160, position: 'absolute', borderRadius: 4, bottom: 40, left: 90, padding: 10 }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: "white" }}>ViewCart . ₹{Total}</Text>
          </Pressable>
        )

        }
      </View>
    </>
  )
}

export default Viewcart

const styles = StyleSheet.create({})