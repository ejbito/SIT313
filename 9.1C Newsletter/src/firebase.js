import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6M17XSbY8jzSWMuioUSL8CnmVGMxawh8",
  authDomain: "sit313-78dbe.firebaseapp.com",
  projectId: "sit313-78dbe",
  storageBucket: "sit313-78dbe.appspot.com",
  messagingSenderId: "504318224636",
  appId: "1:504318224636:web:0ac6188f9527e44251cf79",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
