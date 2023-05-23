import "firebase/compat/auth";
import "firebase/compat/firestore";
import config from "../../../config.json";
import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: config.FIREBASE_APIKEY,
  authDomain: config.FIREBASE_AUTHDOMAIN,
  projectId: config.FIREBASE_PROJECTID,
  storageBucket: config.FIREBASE_STORAGEBUCKET,
  messagingSenderId: config.FIREBASE_MESSAGINGSENDERID,
  appId: config.FIREBASE_APPID,
  measurementId: config.FIREBASE_MEASUREMENTID,
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const db = firebaseApp.firestore();
export const storage = getStorage(firebaseApp);
