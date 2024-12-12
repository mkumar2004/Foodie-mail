import { StyleSheet, Text, SafeAreaView, View, Image, Platform, KeyboardAvoidingView, TextInput, Pressable,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import {signInWithEmailAndPassword} from 'firebase/auth'
import auth from '../services/firebaseAuth';

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Error, setError] = useState("");
    const navigation=useNavigation();
     
    const handleLogin=()=>{
        //console.log(name,email,password);
        setError('');
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user =userCredential.user;
            navigation.navigate("Dashbord")
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
                    <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 12, color: "#191970", alignItems: "center" }} >Login In your Account</Text>
                </View>


                <View style={{ marginTop: 75 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#dcdcdc", paddingVertical: 5, borderRadius: 25, marginTop: 10 }}>

                        <MaterialIcons style={{ marginLeft: 8 }} name="email" size={34} color="grey" />
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

                        <FontAwesome5 style={{ marginLeft: 8 }} name="user-lock" size={27} color="grey" />
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
                    onPress={handleLogin}
                    style={{
                    width:200,
                    backgroundColor:"#FEBE10",
                    borderRadius:6,
                    marginLeft:"auto",
                    marginRight:"auto",
                    padding:15
                }}>
                    <Text style={{textAlign:"center",color:"white",fontSize:18,fontWeight:"bold"}}>Login</Text>
                </TouchableOpacity>

                <Pressable onPress={() => navigation.navigate("Register")} style={{marginTop:15}}>
                    
                    <Text style={{textAlign:"center",color:"grey"}}>Don't have an Account? Sign up</Text>
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

export default LoginScreen
