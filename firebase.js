// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.NEXT_PUBLIC_FIREBASE_APIKEY}`,
  authDomain: "healthcare-ai-33de8.firebaseapp.com",
  projectId: "healthcare-ai-33de8",
  storageBucket: "healthcare-ai-33de8.appspot.com",
  messagingSenderId: "902289577888",
  appId: "1:902289577888:web:56394b11feb83df757f6c5",
  measurementId: "G-LK68Z6XXYB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
