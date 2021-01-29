import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDMn2ydrsBPFwSbl0LR4Ju2X66RQSIP7jA",
    authDomain: "crw-clothing-145ce.firebaseapp.com",
    projectId: "crw-clothing-145ce",
    storageBucket: "crw-clothing-145ce.appspot.com",
    messagingSenderId: "743497037529",
    appId: "1:743497037529:web:69ef35440b7d29695370c8"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;