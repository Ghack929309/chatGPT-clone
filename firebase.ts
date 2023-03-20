// Import the functions you need from the SDKs you need
import {getApp,getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {FirebaseApp} from "@firebase/app-types";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFr2JpgbBcCPj0aMxXCcNDP9TgXKh9ZxE",
    authDomain: "chatgpt-b76ec.firebaseapp.com",
    projectId: "chatgpt-b76ec",
    storageBucket: "chatgpt-b76ec.appspot.com",
    messagingSenderId: "576477699197",
    appId: "1:576477699197:web:e8bd1b766bf7f2545a6514"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(<FirebaseApp>app)

export {db}