import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDTk6UU3QUyA6_ubEOWAxaefDfPS86JWDw",
  authDomain: "fir-demo-a75e8.firebaseapp.com",
  projectId: "fir-demo-a75e8",
  storageBucket: "fir-demo-a75e8.appspot.com",
  messagingSenderId: "488053039307",
  appId: "1:488053039307:web:a54e22c449e0ea0fe3fb4e",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
