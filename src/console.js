// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6vVWF84LqRhSCDyc_mQ6Ktik05WctHyc",
  authDomain: "waterproblem-subbu.firebaseapp.com",
  projectId: "waterproblem-subbu",
  storageBucket: "waterproblem-subbu.appspot.com",
  messagingSenderId: "826365628417",
  appId: "1:826365628417:web:39749ad6f9aaf0c5e3f000",
  measurementId: "G-KWCMC7QWQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
