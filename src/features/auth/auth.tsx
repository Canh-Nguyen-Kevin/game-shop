import React from "react";
// import firebase from "firebase";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC8cvjQCa51-6K2Gegqga92rWWeHxYHEM",
  authDomain: "game-shop-501dc.firebaseapp.com",
  projectId: "game-shop-501dc",
  storageBucket: "game-shop-501dc.appspot.com",
  messagingSenderId: "375091939910",
  appId: "1:375091939910:web:322a03796b20e62fbc5847",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = () => {
  return <div>Auth</div>;
};

export default Auth;
