// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyA5mH6m3_JwUEAjUQf9gSeFOiFuWJWnY",
  authDomain: "food-delivery-4312a.firebaseapp.com",
  projectId: "food-delivery-4312a",
  storageBucket: "food-delivery-4312a.firebasestorage.app",
  messagingSenderId: "1048045163608",
  appId: "1:1048045163608:web:86a5542cf17368ed3ee62d",
  measurementId: "G-QDGDHJCQTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);