// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrvplBYxUKCcehCRsq8tLCWnSOcwTQEf0",
  authDomain: "foodapp-16921.firebaseapp.com",
  projectId: "foodapp-16921",
  storageBucket: "foodapp-16921.appspot.com",
  messagingSenderId: "719853431380",
  appId: "1:719853431380:web:934f15316093fd40db1bc1",
  measurementId: "G-HDSWXVMN8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);