// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4mmSk6sDHkKfaN8Kgj3MDigERQXL55mg",
  authDomain: "practice-hotel-authentication.firebaseapp.com",
  projectId: "practice-hotel-authentication",
  storageBucket: "practice-hotel-authentication.appspot.com",
  messagingSenderId: "52150356623",
  appId: "1:52150356623:web:c9b5f264e777f71b8f7efa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
