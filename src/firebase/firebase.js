import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBdwv7R3rBcZFcLa94E6FXChOPUo77PfvM",
  authDomain: "crown-clothing-fe431.firebaseapp.com",
  projectId: "crown-clothing-fe431",
  storageBucket: "crown-clothing-fe431.appspot.com",
  messagingSenderId: "556244875210",
  appId: "1:556244875210:web:5d95ab386f98854a230133",
  measurementId: "G-Q9LMK2DZRV",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (
  userAuth,
  additionalData = {}
) => {
  if (!userAuth) return;

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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
