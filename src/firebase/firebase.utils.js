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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    console.log('userAuth', userAuth);
    console.log('additionalData', additionalData);
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const userSnapShot = await userRef.get();

    if (!userSnapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        console.log('additionalData', additionalData);
        try{
            await userRef.set( {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    
    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newObjDoc = collectionRef.doc()
        console.log(newObjDoc)
        batch.set(newObjDoc, obj)
    });

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map( doc => {
        const {title, items } = doc.data()
        return {routeName: encodeURI(title.toLowerCase()),
                id: doc.id,
                title,
                items
            }
    })

    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    },{})    
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;