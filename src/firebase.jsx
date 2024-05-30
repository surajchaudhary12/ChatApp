import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFYkdIO_s8nZuMbIYPCEgdWmhdL_XJ_mA",
  authDomain: "chat-app-8286c.firebaseapp.com",
  projectId: "chat-app-8286c",
  storageBucket: "chat-app-8286c.appspot.com",
  messagingSenderId: "939234863304",
  appId: "1:939234863304:web:78fd5da08ff88df0a59dfd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()