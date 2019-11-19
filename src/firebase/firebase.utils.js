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

export const createUserProfileDoc = async (userAuth, additionalData) => {
    // Say if the authentication fails, we simply return nothing
    if (!userAuth) {
        return;
    }

    // Say if the authentication is successful,
    // We query inside the firestore and get the object
    // What is query wrt Firestore? its asksing Firestore to gives us something from the DB
    // What does Firestore return? Firestore returns references and snapshots i.e., document or collection versions
    // Reference here is the current place of the obj in the DB that we're querying
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('Error creating user', error);
        }
    }

    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
