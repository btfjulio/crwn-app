import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
  apiKey: "AIzaSyC12hQE82hWIxlBGShVWSLTwYPKbHXEhxc",
  authDomain: "crwn-db-46ebe.firebaseapp.com",
  databaseURL: "https://crwn-db-46ebe.firebaseio.com",
  projectId: "crwn-db-46ebe",
  storageBucket: "crwn-db-46ebe.appspot.com",
  messagingSenderId: "1036268537834",
  appId: "1:1036268537834:web:ec7bff80429c224e2ed493",
  measurementId: "G-SJVKC3J6ZX"
};

export const createdUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  // query for the user
  const snapShot = await userRef.get()
  // check if already has the user on firestore
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date();
    try {
      // create new user on firestore
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  // return found/created user
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;