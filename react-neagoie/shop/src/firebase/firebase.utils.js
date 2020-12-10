import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDhROICn4TzdmNiWWS1Q6kHRCQtP83CMEk",
  authDomain: "react-shop-81f73.firebaseapp.com",
  projectId: "react-shop-81f73",
  storageBucket: "react-shop-81f73.appspot.com",
  messagingSenderId: "216392339277",
  appId: "1:216392339277:web:d1e1df86e8ad4e457b3104"
}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
