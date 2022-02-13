// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection, setDoc, addDoc } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_s3b2lqQFCZIk7LpH2QIENatq7oSQoj4",
  authDomain: "fair-catcher-150017.firebaseapp.com",
  databaseURL: "https://fair-catcher-150017-default-rtdb.firebaseio.com",
  projectId: "fair-catcher-150017",
  storageBucket: "fair-catcher-150017.appspot.com",
  messagingSenderId: "1014672001327",
  appId: "1:1014672001327:web:b26ab291d08dc970f3f9da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const customerCollection = collection(db, 'Customer Info');
const emailsCollection = collection(db, 'emails');

export {db, app, customerCollection, emailsCollection};