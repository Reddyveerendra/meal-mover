// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNS6HAjjRCdvOV2MZgpdcubgAjmVBeroc",
    authDomain: "meal-mover-2de04.firebaseapp.com",
    projectId: "meal-mover-2de04",
    storageBucket: "meal-mover-2de04.appspot.com",
    messagingSenderId: "940598933344",
    appId: "1:940598933344:web:a64d6b9eea30bd73865005",
    measurementId: "G-XVJDHSNKTS"
};

// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyBNS6HAjjRCdvOV2MZgpdcubgAjmVBeroc",
    authDomain: "meal-mover-2de04.firebaseapp.com",
    projectId: "meal-mover-2de04",
    storageBucket: "meal-mover-2de04.appspot.com",
    messagingSenderId: "940598933344",
    appId: "1:940598933344:web:a64d6b9eea30bd73865005",
    measurementId: "G-XVJDHSNKTS"
});
const auth = getAuth(app);

export { auth }