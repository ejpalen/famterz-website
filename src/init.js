// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFvxvXurfPuyd6JeCUAdWduMd_X14qEtc",
  authDomain: "famterz-website.firebaseapp.com",
  projectId: "famterz-website",
  storageBucket: "famterz-website.appspot.com",
  messagingSenderId: "298525987117",
  appId: "1:298525987117:web:a5734e50432ef446f883a4",
  measurementId: "G-88M8NZJ540",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
