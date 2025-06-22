// app.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv2tgr09braWjrKSsyZNbw9ZgdGyrZIDM",
  authDomain: "tracking-17d26.firebaseapp.com",
  projectId: "tracking-17d26",
  storageBucket: "tracking-17d26.firebasestorage.app",
  messagingSenderId: "506730679610",
  appId: "1:506730679610:web:8f28cbc0a5f05f37ab1403"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);