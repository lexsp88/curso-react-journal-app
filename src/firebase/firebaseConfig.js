import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


 const firebaseConfig = {
    apiKey: "AIzaSyAcQao-XpmCr0xhWZv7pgMDKX8y-Pgt5G0",
    authDomain: "react-journal-cc2f8.firebaseapp.com",
    projectId: "react-journal-cc2f8",
    storageBucket: "react-journal-cc2f8.appspot.com",
    messagingSenderId: "582879482022",
    appId: "1:582879482022:web:5136ffa790207736ea6467"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
    db,
    googleAuthProvider,
    firebase
  }
