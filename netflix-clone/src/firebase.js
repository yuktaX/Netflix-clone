import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {} from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_FIREBASE_AUTHDOMAIN,
//   projectId: process.env.REACT_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING,
//   appId: process.env.REACT_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDGKUuIA27rOOzkcn2B21RYo0JHUJ9GkMY",
  authDomain: "netflix-clone-cecab.firebaseapp.com",
  projectId: "netflix-clone-cecab",
  storageBucket: "netflix-clone-cecab.appspot.com",
  messagingSenderId: "569434365697",
  appId: "1:569434365697:web:876e37360a1d9aed2a8500",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

//connectAuthEmulator(auth, "localhost:3000");
