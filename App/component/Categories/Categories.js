import { StyleSheet, Text, View, FlatList, Pressable, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import sanityClient, { urlfor } from '../../sanity Query/sanityClient'
import Categorycard from '../itemsComponent/Categorycard'

const items = [
  {
    id: "1",
    name: "Popular/Trending"
  },
  {
    id: "2",
    name: "New Arrival"
  },
  {
    id: "3",
    name: "Top Rate"
  },
  {
    id: "4",
    name: "Cuisine"
  },
  {
    id: "5",
    name: "Offers/Discount"
  },
  {
    id: "6",
    name: "Nearby Restaurents"
  },
]

const Categories = () => {
  

  return (
    <View style={{ marginTop: 8 }}>
      <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={items} renderItem={({ item }) => (

        <Pressable style={{ margin: 7, backgroundColor: "#FFA07A", padding: 8, borderRadius: 5,borderColor:'black'}}>
          <Text>{item.name}</Text>
          

        </Pressable>
      )} />
      

    </View>

  );
};


export default Categories

