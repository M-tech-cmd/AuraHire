// Import the functions you need from the SDKs you need
import {initializeApp, getApp, getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBpJLn-CG3PBngf6B6chUO_Ef426mduFvY",
    authDomain: "aurahire-7e2d4.firebaseapp.com",
    projectId: "aurahire-7e2d4",
    storageBucket: "aurahire-7e2d4.firebasestorage.app",
    messagingSenderId: "724440789960",
    appId: "1:724440789960:web:600b78bdeb330e884346fd",
    measurementId: "G-2SYS0MVC1S"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);