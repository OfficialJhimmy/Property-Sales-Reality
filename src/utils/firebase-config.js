// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZpf33tbkQuOoDHY9akpEybFO-wBMGWMM",
  authDomain: "property-reality.firebaseapp.com",
  projectId: "property-reality",
  storageBucket: "property-reality.appspot.com",
  messagingSenderId: "571962201979",
  appId: "1:571962201979:web:417c752db7914a09768fde",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
