import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBbXu6ciLpLVrm5YHktj7eY4jQ7hHnjGRw",
  authDomain: "crwn-db-589fe.firebaseapp.com",
  projectId: "crwn-db-589fe",
  storageBucket: "crwn-db-589fe.appspot.com",
  messagingSenderId: "1078811216136",
  appId: "1:1078811216136:web:e461a9291c2be5c7f4c4bd",
  measurementId: "G-CG3WCT9XW7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const {displayName , email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(err){
      console.log("Error creating user", err.message);
    }
  }
  return userRef;
};

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
