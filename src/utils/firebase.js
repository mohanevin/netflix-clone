// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSTtx73UsBrlCdx-ftfWsnOQ7OzwQjkVg",
  authDomain: "netflixgpt121.firebaseapp.com",
  projectId: "netflixgpt121",
  storageBucket: "netflixgpt121.appspot.com",
  messagingSenderId: "912961788792",
  appId: "1:912961788792:web:8c0c22cd9ef8e3ba89468d",
  measurementId: "G-PJ33SKQCNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);