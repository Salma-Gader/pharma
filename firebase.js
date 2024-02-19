import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDNhI5LpgobA_jWTpoNOoALF_rEzul59Es",
    authDomain: "pharma-e90c5.firebaseapp.com",
    projectId: "pharma-e90c5",
    storageBucket: "pharma-e90c5.appspot.com",
    messagingSenderId: "994685653908",
    appId: "1:994685653908:web:cfb38e4bbbdbe87d7e7581",
    measurementId: "G-8XWQ1GJQPG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { db, auth, app };