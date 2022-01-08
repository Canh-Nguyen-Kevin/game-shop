import React, { useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBC8cvjQCa51-6K2Gegqga92rWWeHxYHEM",
  authDomain: "game-shop-501dc.firebaseapp.com",
  projectId: "game-shop-501dc",
  storageBucket: "game-shop-501dc.appspot.com",
  messagingSenderId: "375091939910",
  appId: "1:375091939910:web:322a03796b20e62fbc5847",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleProvider = new GoogleAuthProvider();
// export const facebookProvider = new firebase.auth.FacebookAuthProvider();
