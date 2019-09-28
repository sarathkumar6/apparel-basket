import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBIo2l3Izf0n1K_aPsFBu8e5KxsH3J9oow",
    authDomain: "apparel-basket-db.firebaseapp.com",
    databaseURL: "https://apparel-basket-db.firebaseio.com",
    projectId: "apparel-basket-db",
    storageBucket: "",
    messagingSenderId: "764185117071",
    appId: "1:764185117071:web:eb1012146b976dd2924bfa",
    measurementId: "G-ZKF37GQ7KL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
