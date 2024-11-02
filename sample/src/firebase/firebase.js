import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration provided by your classmate
const firebaseConfig = {
  apiKey: "AIzaSyCXDL6yff9OjnI2rN5SSxs1DMljRShY8hI",
  authDomain: "capstonefinals-4isb.firebaseapp.com",
  projectId: "capstonefinals-4isb",
  storageBucket: "capstonefinals-4isb.appspot.com",
  messagingSenderId: "878447653307",
  appId: "1:878447653307:web:f11a7e6967bf4d15a9549e",
  measurementId: "G-QRY7VXJ5PS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
