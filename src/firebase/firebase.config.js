// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: "assignment-ten-painting-auth",
  storageBucket: "assignment-ten-painting-auth.appspot.com",
  messagingSenderId: "1024530306856",
  appId: "1:1024530306856:web:2f81d58a1a6525b286221d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

// AIzaSyD-Ii0P3aE11igAgDiGpTyVWgJNu4eINSA
// assignment-ten-painting-auth.firebaseapp.com