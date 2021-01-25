import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAWG5EIlA8NqKgqt5st6yrBxAHsGl0SGEo",
  authDomain: "crwn-db-f131e.firebaseapp.com",
  projectId: "crwn-db-f131e",
  storageBucket: "crwn-db-f131e.appspot.com",
  messagingSenderId: "774409874727",
  appId: "1:774409874727:web:ccc17565d5ad150fd8cd02",
  measurementId: "G-GF5VLHGT00",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
