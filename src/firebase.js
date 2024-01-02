import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdEoV1z6wzqA5lfbXNBPGukfEVhlvhkos",
  authDomain: "abchat-3e1c3.firebaseapp.com",
  projectId: "abchat-3e1c3",
  storageBucket: "abchat-3e1c3.appspot.com",
  messagingSenderId: "567064991421",
  appId: "1:567064991421:web:f2ff6b85ca24175ffe09d4",
  measurementId: "G-SX03NS9EVS"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

