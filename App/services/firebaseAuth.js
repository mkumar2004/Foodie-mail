// Import the functions you need from the SDKs you need
import { initializeApp ,getApps} from "firebase/app";
import { initializeAuth, getReactNativePersistence,getAuth } from "firebase/auth";
import RectNativeAsyncStorage from '@react-native-async-storage/async-storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "foodie-mail-6d483.firebaseapp.com",
  projectId: "foodie-mail-6d483",
  storageBucket: "foodie-mail-6d483.firebasestorage.app",
  messagingSenderId: "",
  appId: ""
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
