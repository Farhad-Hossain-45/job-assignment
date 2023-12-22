// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCibxPsV7ccFzzWGgkRkyX5Ec-GGTyJdpY",
  authDomain: "job-assignment-9550d.firebaseapp.com",
  projectId: "job-assignment-9550d",
  storageBucket: "job-assignment-9550d.appspot.com",
  messagingSenderId: "883644718268",
  appId: "1:883644718268:web:03d8c8fc462babe197c4b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;