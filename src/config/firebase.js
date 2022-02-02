import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBkxf5GnPisJ6Z0xmKddu9tuWeuFrEsDus",
    authDomain: "auction-system-382d1.firebaseapp.com",
    projectId: "auction-system-382d1",
    storageBucket: "auction-system-382d1.appspot.com",
    messagingSenderId: "1086277381466",
    appId: "1:1086277381466:web:79520c53bc9cc7f31b9763",
    measurementId: "G-4T1N4PFSDK"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();