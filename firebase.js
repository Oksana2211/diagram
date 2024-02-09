// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLUvp-nsN2Q6ToNu9pydwYRvnSdM4WWVs",
    authDomain: "diagram-37e9e.firebaseapp.com",
    projectId: "diagram-37e9e",
    storageBucket: "diagram-37e9e.appspot.com",
    messagingSenderId: "19062285090",
    appId: "1:19062285090:web:90f069f64c8c2d91f1fb7b",
    measurementId: "G-XPV4NZNEW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);