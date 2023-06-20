// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8rcE5Kima6kT1ykzV8UMd_-kBiKyJQE4",
  authDomain: "local-shopsx.firebaseapp.com",
  projectId: "local-shopsx",
  storageBucket: "local-shopsx.appspot.com",
  messagingSenderId: "901849604972",
  appId: "1:901849604972:web:2360d4e210b98f1d4ac949",
  measurementId: "G-FBSHLP00SS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);