// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7FQwAzFZQ5x2hICJnq3cfk-Wawr05kYs",
  authDomain: "aurahire-471113.firebaseapp.com",
  projectId: "aurahire-471113",
  storageBucket: "aurahire-471113.firebasestorage.app",
  messagingSenderId: "898437473677",
  appId: "1:898437473677:web:cbd1beff3fa0fffb4f89c4",
  measurementId: "G-8PXCQ8R9B6"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);