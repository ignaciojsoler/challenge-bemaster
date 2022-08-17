import { initializeApp } from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCCtXEbvy4Y6nkiLMMKIYnmBA1b34r4wJA",
  authDomain: "crud-react-fcaa4.firebaseapp.com",
  projectId: "crud-react-fcaa4",
  storageBucket: "crud-react-fcaa4.appspot.com",
  messagingSenderId: "284096875721",
  appId: "1:284096875721:web:5b0993d7729cea93489118",
  measurementId: "G-FWTER0SEER"
};

export const app = initializeApp(firebaseConfig);
