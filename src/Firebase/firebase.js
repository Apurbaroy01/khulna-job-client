// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN_JeMreBtKmL0OZ9PuTTmBws-_xbwSAc",
  authDomain: "simple-firebase-99eac.firebaseapp.com",
  projectId: "simple-firebase-99eac",
  storageBucket: "simple-firebase-99eac.firebasestorage.app",
  messagingSenderId: "26964358991",
  appId: "1:26964358991:web:1a135e357498e7a149773a",
  measurementId: "G-DS1WZHR3YB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;