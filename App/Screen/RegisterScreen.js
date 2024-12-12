import { StyleSheet, Text, SafeAreaView, View, Image, Platform, KeyboardAvoidingView, TextInput, Pressable,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {createUserWithEmailAndPassword,sendEmailVerification} from 'firebase/auth'
import auth from '../services/firebaseAuth';

const RegisterScreen = () => {
  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const navigation=useNavigation();
  const handleRegister=()=>{
    //console.log(name,email,password);
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        const user =userCredential.user;
    sendEmailVerification(auth.currentUser)
    .then(() => {
    // Email verification sent!
    // ...
    });
        navigation.navigate("Login")
        //console.log(user);
        
   
    })
    .catch((Error)=>{
       // console.log(error)
       //const customError= Error.code=="Invalid ";
       setError(Error.message)
    })
 }

    return (
        <SafeAreaView style={good.container}>
            <StatusBar backgroundColor='white' />
            <View style={good.SafeArray}  >
                <Image
                    style={good.imagesize}
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxkT1j74__23REEYkoLwslH47P2puDE73CqzfvjQ30ndxUm4m2Ta9UliLDOYEm17MIRD8&usqp=CAU",
                    }}
                />
            </View>
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 9, color: "#191970", alignItems: "center" }} >Register your Account</Text>
                </View>

                <View style={{ marginTop: 45 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#dcdcdc", paddingVertical: 5, borderRadius: 25, marginTop: 10 }}>

                        <FontAwesome style={{ marginLeft: 10 }}  name="user" size={34} color="grey" />
                        <TextInput
                            value={name}
                            onChangeText={setUserName}
                            style={{ color: "grey", marginVertical: 5, width: 300, fontSize: name ? 16 : 16 }}
                            placeholder='Username'
                        />

                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#dcdcdc", paddingVertical: 5, borderRadius: 25, marginTop: 10 }}>

                        <MaterialIcons style={{ marginLeft: 10 }} name="email" size={34} color="grey" />
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            style={{ color: "grey", marginVertical: 5, width: 300, fontSize: email ? 16 : 16 }}
                            placeholder='Email'
                        />

                    </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#dcdcdc", paddingVertical: 5, borderRadius: 25, marginTop: 10 }}>

                        <FontAwesome5 style={{ marginLeft: 10 }} name="user-lock" size={27} color="grey" />
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            style={{ color: "grey", marginVertical: 5, width: 300, fontSize: password ? 16 : 16 }}
                            placeholder='Password'
                        />
                    </View>
                </View>
                <View style={{marginTop:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Text></Text>

                    <Text style={{color:"#007FFF",fontWeight:"500",fontSize:18}}>Forget Password</Text>
                </View>

                 <View style={{marginTop:60}} />

                 {Error && <Text style={{color:'red'}}> {Error} </Text>}
                       
                <TouchableOpacity
                   onPress={handleRegister}
                   style={{
                    width:200,
                    backgroundColor:"#FEBE10",
                    borderRadius:6,
                    marginLeft:"auto",
                    marginRight:"auto",
                    padding:15
                }}> 
                  
                    <Text style={{textAlign:"center",color:"white",fontSize:18,fontWeight:"bold"}}>Register</Text>
                   </TouchableOpacity>

                <Pressable  onPress={() => navigation.navigate("Login")} style={{marginTop:15}}>
                    <Text style={{textAlign:"center",color:"grey"}}>Already have an Account?  Sign In</Text>
                </Pressable>
            
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const good = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
  },
  SafeArray: {
      marginTop: Platform.OS === 'android' ? 29 : 0,
  },
  imagesize: {
      width: 150,
      height: 150,
  },
})

export default RegisterScreen
