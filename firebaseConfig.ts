// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs_jAO7KAwH2kL5_-xehPr4kLtMXd4nQI",
  authDomain: "hubfeirasnextjs.firebaseapp.com",
  projectId: "hubfeirasnextjs",
  storageBucket: "hubfeirasnextjs.appspot.com",
  messagingSenderId: "391541342315",
  appId: "1:391541342315:web:622dab6c64faa2958b712e",
  measurementId: "G-RMHZVLL3Y9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);