import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhJHtruUen2gfb-Bc2sjnLTC2HqbDA9FQ",
  authDomain: "journal-app-react-424ec.firebaseapp.com",
  projectId: "journal-app-react-424ec",
  storageBucket: "journal-app-react-424ec.appspot.com",
  messagingSenderId: "242987171369",
  appId: "1:242987171369:web:714574cdd235654c99e638"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* const db = firebase.firestore() */
/* const googleAuthProvider = new firebase.auth.GoogleAuthProvider() */

const googleAuthProvider = new GoogleAuthProvider();

const db = getFirestore()

export {
  app,
  db,
  googleAuthProvider
}