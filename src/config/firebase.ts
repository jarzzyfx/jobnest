// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAvTscf0_HaDMLh46RdWxyxoqSPKjOWTHE",
  authDomain: "jobnest-4c1f5.firebaseapp.com",
  projectId: "jobnest-4c1f5",
  storageBucket: "jobnest-4c1f5.appspot.com",
  messagingSenderId: "390469822412",
  appId: "1:390469822412:web:5856ec36ecc5544feb1f69",
  measurementId: "G-P2MP5G5B7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)