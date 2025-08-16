// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyBARqjBKjRGj9E3rFHKqrqdsblfiXQGe6U",
  authDomain: "naukri-96fb9.firebaseapp.com",
  projectId: "naukri-96fb9",
  storageBucket: "naukri-96fb9.firebasestorage.app",
  messagingSenderId: "817606612182",
  appId: "1:817606612182:web:9e5aecced0adc4d27b6577",
  measurementId: "G-8RT5279CPZ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
