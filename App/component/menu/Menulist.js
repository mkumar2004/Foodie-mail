import { ScrollView, StyleSheet, Text, View,Image, FlatList, Pressable,TextInput } from 'react-native'
import React from 'react'

const Menulist = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}  >
     
        <Pressable style={{flexDirection:'row',alignItems:'center',marginTop:6,justifyContent:'space-between',gap:17}}>
        <Image
        style={{width:140,height:140,borderRadius:5}}
           source={require('../menu/sp.jpg')}
          
        />
        <Image
        style={{width:140,height:140,borderRadius:5}}
           source={require('../menu/idli.jpg')}
          
        />
        
        <Image
           style={{width:150,height:150}}
           source={require('../menu/dosa.png')}
        />

          <Image
           style={{width:140,height:140,borderRadius:5}}
           source={require('../menu/pongal.jpg')}
        />
        
        <Image
           style={{width:140,height:140,borderRadius:5}}
           source={require('../menu/s.jpg')}
        />

        </Pressable>
      
    </ScrollView>
  )
}

export default Menulist

const styles = StyleSheet.create({})