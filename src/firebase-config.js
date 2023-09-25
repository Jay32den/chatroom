// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2dLUSYvVUg3n5FbdzieE_bp510ocochQ",
  authDomain: "chatroom-df5e8.firebaseapp.com",
  projectId: "chatroom-df5e8",
  storageBucket: "chatroom-df5e8.appspot.com",
  messagingSenderId: "668552215915",
  appId: "1:668552215915:web:6532e0787523bbd1b9a02e",
  measurementId: "G-QYJNNTB8J8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);