import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA73E6mSZNCbS6cKJVSYJMslE0k7gre1N4",
  authDomain: "cruisematch-30682.firebaseapp.com",
  projectId: "cruisematch-30682",
  storageBucket: "cruisematch-30682.firebasestorage.app",
  messagingSenderId: "239009217580",
  appId: "1:239009217580:web:e70c67b654b55c1a4f6589",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);