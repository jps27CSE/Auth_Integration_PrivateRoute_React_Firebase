// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKEspzyeTKTHGyDHc_u0041oV5JC_fcQs",
  authDomain: "auth-firebase-e7037.firebaseapp.com",
  projectId: "auth-firebase-e7037",
  storageBucket: "auth-firebase-e7037.appspot.com",
  messagingSenderId: "248370536712",
  appId: "1:248370536712:web:f5091f7f22a06a6d938cbd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
