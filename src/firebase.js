import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCcxdq-uFzqfazY8kTlFTlU5JWU4Y42xMU",
    authDomain: "webapp-57eda.firebaseapp.com",
    projectId: "webapp-57eda",
    storageBucket: "webapp-57eda.appspot.com",
    messagingSenderId: "34784789900",
    appId: "1:34784789900:web:7d16b1d6e70ba2e4dd82a9"
  }).auth();