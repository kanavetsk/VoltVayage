// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZ7gaLftRgZY_O7IeW0EYvg8P8x9SvDtU",
    authDomain: "e-shop-c6fce.firebaseapp.com",
    projectId: "e-shop-c6fce",
    storageBucket: "e-shop-c6fce.appspot.com",
    messagingSenderId: "339567571100",
    appId: "1:339567571100:web:b27b7c8c89797397e17d59"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
