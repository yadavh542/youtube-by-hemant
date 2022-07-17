
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA8GJWdtdT6nl6PLm3yGY5k317vcn_wBwM",
    authDomain: "by-hemant-8f0e4.firebaseapp.com",
    projectId: "by-hemant-8f0e4",
    storageBucket: "by-hemant-8f0e4.appspot.com",
    messagingSenderId: "439566220603",
    appId: "1:439566220603:web:aedf6b63646f4708df4b1e"
  };

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();


export {db, auth, provider};