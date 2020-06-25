import firebase from "firebase/app"

//for the database
import "firebase/firestore"

//for the auth
import "firebase/auth"

const config = {
  apiKey: "AIzaSyC8f0noRRjSwE_gAdBKUp6l1b-CFJC3aoY",
  authDomain: "practice-project-a4cd1.firebaseapp.com",
  databaseURL: "https://practice-project-a4cd1.firebaseio.com",
  projectId: "practice-project-a4cd1",
  storageBucket: "practice-project-a4cd1.appspot.com",
  messagingSenderId: "155291785920",
  appId: "1:155291785920:web:9f41c088f3515f5d9aeb25",
  measurementId: "G-WWSP95HLQT"
}

//get user from auth library and store it in database

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if userAuth returns null, just return
  if (!userAuth) return

  // get document reference from firebase
  // use this reference for CRUD methods, so later use it for creating one
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  // get snapShot from the reference
  const snapShot = await userRef.get()

  // if doesn't exsist creat one
  if (!snapShot.exists) {
    // take what you need for creating
    const { displayName, email } = userAuth
    const createAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log(error)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

//set google auth utitlity

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
