import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKVhkzwfhE7T_ZgQReRW1glAYugehXCBs",
  authDomain: "auth-demo-bbd34.firebaseapp.com",
  projectId: "auth-demo-bbd34",
  storageBucket: "auth-demo-bbd34.appspot.com",
  messagingSenderId: "670791494398",
  appId: "1:670791494398:web:8efc15d3ffc5d16002d3af",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
