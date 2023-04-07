// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzgFl9PCvdDrmLGtSa_oe_kFdLyIoYwvk",
    authDomain: "instrument-commerce.firebaseapp.com",
    projectId: "instrument-commerce",
    storageBucket: "instrument-commerce.appspot.com",
    messagingSenderId: "93305009885",
    appId: "1:93305009885:web:95f34086300a0c3db90d34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) //(db = database)
