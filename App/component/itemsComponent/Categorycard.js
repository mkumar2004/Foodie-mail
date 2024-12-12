import { ScrollView, StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React from 'react'
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context'

const Categorycard = () => {
  return (
    <SafeAreaView style={{marginBottom:32}}>
    <View >
      <Text style={{fontWeight:'bold',fontSize:17}}>Eat What makes you happy</Text>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    
    <Pressable style={{flexDirection:'row',alignItems:'center',marginTop:15,justifyContent:'space-between',gap:10}}>
        <View>
        <Image
        style={{width:70,height:70,borderRadius:35}}
           source={require('../itemsComponent/neer dosa.jpg')}
          
        />
        <Text>Neer Dosa</Text>
        </View>

        <View >
        <Image
        style={{width:70,height:70,borderRadius:35}}
           source={require('../itemsComponent/vada.jpg')}
          
        />
        <Text style={{alignItems:'center',marginLeft:15}}>vada</Text>
        </View>

        <View>
        <Image
        style={{width:70,height:70,borderRadius:35}}
           source={require('../itemsComponent/chilli.jpg')}
          
        />
        <Text style={{alignItems:'center',marginLeft:15}}>chilli</Text>
        </View>

        <View>
        <Image
        style={{width:70,height:70,borderRadius:35,marginLeft:15}}
           source={require('../itemsComponent/do.jpeg')}
          
        />
        <Text style={{alignItems:'center'}}>ceylon parotta</Text>
        </View>

        <View>
        <Image
        style={{width:70,height:70,borderRadius:35}}
           source={require('../itemsComponent/veg.jpg')}
          
        />
        <Text>veg soup</Text>
        </View>
      
      
      
      

      
         

        </Pressable>

   

    </ScrollView>
    </SafeAreaView>
  )
}

export default Categorycard

const styles = StyleSheet.create({})