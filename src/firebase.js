import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCt1RkMNqqBzF7LS7L8RQTbO7jF1vHFqO8",
    authDomain: "clone-df459.firebaseapp.com",
    projectId: "clone-df459",
    storageBucket: "clone-df459.appspot.com",
    messagingSenderId: "552177165360",
    appId: "1:552177165360:web:e682e41af1aa05be7cb9f5"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider}