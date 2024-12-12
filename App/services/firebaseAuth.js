// Import the functions you need from the SDKs you need
import { initializeApp ,getApps} from "firebase/app";
import { initializeAuth, getReactNativePersistence,getAuth } from "firebase/auth";
import RectNativeAsyncStorage from '@react-native-async-storage/async-storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBvnMFqS-qUfdTSsaIXVs2eNCXT5o8Erw",
  authDomain: "foodie-mail-6d483.firebaseapp.com",
  projectId: "foodie-mail-6d483",
  storageBucket: "foodie-mail-6d483.firebasestorage.app",
  messagingSenderId: "877483178230",
  appId: "1:877483178230:web:b61fa3f1a1125dc9ad54d7"
};

let auth;

if(getApps().length==0){
  
     // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    auth = initializeAuth(app , {
    persistence:getReactNativePersistence(RectNativeAsyncStorage)
})

}else{
    auth=getAuth();
}







export default auth;