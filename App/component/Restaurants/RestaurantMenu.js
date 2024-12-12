import { ScrollView, StyleSheet, Text, View, Image,Pressable } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react'
const RestaurantMenu = ({menu,Cart,setCart}) => {
    //const menu = props.menu;
    // console.log(menu);
//this above two things checking for without using context hooks for better understanding 
    
    const bestseller = true;
    const [additems,setadditems] = useState(0);
    

    return (

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop:20}} >
            <View >
                <View style={{ margin: 10, marginLeft: 20 }}>
                    <Text>{menu.name}</Text>
                    <Text>{menu.price}</Text>
                </View>

                <View style={{ width: 100, marginLeft: 20, flexDirection: 'row', alignItems: 'center' }} >
                    <Text style={{ backgroundColor: '#FFFFF0', padding: 4, borderRadius: 5 }}>

                        {[0, 0, 0, 0, 0].map((en, i) => (
                            <FontAwesome
                                key={`${menu.id}-${i}`}
                                style={{ margin: 2, marginHorizontal: 3 }}
                                name={i < Math.floor(menu.star) ? "star" : "star-o"}
                                size={13}
                                color="#FFD700"
                            />
                        ))}
                    </Text>
                    <View style={{ marginLeft: 5, backgroundColor: '#ff9068', padding: 2, }}>
                        <Text style={{ color: 'white' }}>
                            {(bestseller && menu.bestSeller) || menu.mustTry}
                        </Text>
                    </View>
                </View>

                <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center', width: 100, gap: 5, marginTop: 5 }}>

                    <AntDesign style={{ borderColor: '#FF5F6D', borderWidth: 2, borderRadius: 16, padding: 4 }} name="hearto" size={24} color="#ffc371" />
                    <MaterialCommunityIcons style={{ borderColor: '#FF5F6D', borderWidth: 2, borderRadius: 16, padding: 4 }} name="share-outline" size={24} color="#ffc371" />
                </View>
                

            </View>
                <View style={{marginRight:15,}}>
                    <Image
                        style={{ width: 120, height: 120,borderRadius:7 }}
                        source={{ uri: menu.image }}
                    />
                    <Pressable
                     style={{position:'absolute',right:10,top:97,flexDirection:'row',
                     alignItems:'center',backgroundColor:'#f44336'}}
                    >
                    <Pressable onPress={() =>{
                        setCart(Cart.filter((p) =>p.id !==menu.id));
                        setadditems(Math.max(0,additems-1))}}>
                        <Text style={{fontSize:25,color:'white',paddingHorizontal:10}}>
                         -
                        </Text>
                    </Pressable>
                    <Pressable>
                        <Text style={{fontSize:25,color:'white',paddingHorizontal:10}}>
                         {additems}
                        </Text>
                    </Pressable>
                    <Pressable onPress={() =>{
                        setCart([...Cart,menu])
                        setadditems(additems+1)
                    }}>
                        <Text style={{fontSize:25,color:'white',paddingHorizontal:10}}>
                         +
                        </Text>
                    </Pressable>

                    </Pressable>
                </View>

        </View>



    )
}

export default RestaurantMenu

const styles = StyleSheet.create({})