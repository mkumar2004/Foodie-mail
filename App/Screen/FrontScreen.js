import { StyleSheet, Text, View, SafeAreaView,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Video } from 'expo-av'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native';
const FrontScreen = () => {
    const navigation=useNavigation();
    const onPress=()=>{
       
            navigation.navigate("Login")
        }       
    return (



        <View style={contains.videoscreen}>
              <StatusBar backgroundColor='white' />
            
            <Video
                style={contains.video}
                source={{
                    uri: 'https://videos.pexels.com/video-files/7008572/7008572-hd_1080_1920_25fps.mp4'
                }}
                shouldPlay
                resizeMode='cover'
                isLooping={true}

            />
            <View style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                marginTop:150,
                marginRight:16,
                color:"yellow"
                
                
                
            }}>



             <Text style={{color:"yellow",display:"flex",fontSize:50,fontWeight: "bold"}}>WELCOME TO FOODIE MAIL !....</Text>
             <Text style={{color:"yellow",display:"flex",fontSize:50,fontWeight: "bold"}}>DELICIOUS FOOD, DELIVERD FAST</Text>            
            <TouchableOpacity 
                
                onPress={onPress}
            
                style={{ 
                
                display:"flex",
                alignItems:"center",
                gap:10,
                flexDirection:"row",
                backgroundColor:"white",
                borderRadius:20,
                padding:10,
                paddingHorizontal:35,
                marginTop:10,
                marginLeft:25
            }}>
             <Image
             style={{width:30,height:30}}
            source={{
                        uri: "https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png",
                    }}
            />
             <Text style={{color:"black"}}>Sign In with Google</Text>
             </TouchableOpacity>
               
            </View>

        </View>



    )
}

export default FrontScreen

const contains = StyleSheet.create({
    videoscreen: {
        flex: 1,
    
    },
    video: {
        height: '100%',
        width: 370,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        
    },
})