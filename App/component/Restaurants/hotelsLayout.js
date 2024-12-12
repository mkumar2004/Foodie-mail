import { StyleSheet, Text, View, Image, ScrollView ,Pressable} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const HotelsLayout = (props) => {
    const Restaruent = props.restaurant;
    // console.log(Restaruent);
    const navigation=useNavigation();
    return (
        <ScrollView>
            <Pressable onPress={()=> navigation.navigate("cart",{
                id:Restaruent.id, 
                name:Restaruent.name,
                aggregate_rating:Restaruent.aggregate_rating, 
                adress:Restaruent.adress   ,
                smalladress:Restaruent.smalladress, 
                cuisines:Restaruent. cuisines,

            })}>
            <View style={{ margin: 10, backgroundColor: 'white' }} >
                <View style={{ borderTopLeftRadius: 7, borderTopRightRadius: 7 ,}}>

                    <Image
                        style={{ width: '100%', aspectRatio: 6 / 4 }}
                        source={{ uri: Restaruent.featured_image }}
                    />

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8, justifyContent: 'space-between', marginRight: 1 }}>
                    <View >
                        <Text style={{ fontSize: 19, fontWeight: '600' }}> {Restaruent.name} </Text>
                        <Text style={{ color: 'grey' }}> {Restaruent.cuisines}  </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#17B169' }}>
                        <Text style={{ color: 'yellow' }}>  {Restaruent.aggregate_rating}  </Text>
                        <AntDesign style={{ color: 'yellow' }} name="star" size={18} color="black" />
                    </View>

                </View>

                <View style={{position:'absolute',right:2,top:160,backgroundColor:'white',padding:4,borderRadius:8,flexDirection:'row'}}>
                <Ionicons name="timer-outline" size={24} color="black" />
                    <Text>{Restaruent.time}</Text>

                </View>

                <View style={{position:'absolute',left:0,top:0,backgroundColor:'#318CE7',padding:8,borderRadius:8,}}>
      
                    <Text style={{fontWeight:'bold',color:'white'}}>{Restaruent.offer}</Text>
                    <Text style={{fontWeight:'bold'}}>Upto 40 ₹</Text>

                </View>



                <View style={{ padding: 10, backgroundColor: 'white', marginRight: 10, }}>
                    <Text style={{ height: 2, backgroundColor: '#909090', boderwidth: 1 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{width:30,height:30,borderRadius:15, backgroundColor: '#007FFF',alignItems:'center',justifyContent:'center' ,marginTop:5}}>
                            <FontAwesome5 style={{}} name="angle-double-right" size={20} color="white" />
                        </View>

                        <Text> {Restaruent.no_of_Delivery} +Order place here </Text>

                        <View style={{marginLeft:15}}>
                            <Text style={{fontSize:12,fontWeight:'bold'}}>MAX SAFETY</Text>
                            <Text style={{fontSize:12,fontWeight:'500'}}>DELIVERY</Text>
                        </View>


                    </View>
                </View>



            </View>
        
     </Pressable>

        </ScrollView>

    )
}

export default HotelsLayout

const styles = StyleSheet.create({})