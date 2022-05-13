// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: "what-the-fish-69.firebaseapp.com",
    projectId: "what-the-fish-69",
    storageBucket: "what-the-fish-69.appspot.com",
    messagingSenderId: "882209224893",
    appId: "1:882209224893:web:8cc14955aef6d9cd8b5fd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);