// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnOIwsKmWowjKZhu2C_cp_C701em31avE",
  authDomain: "myfirstproject-3c50f.firebaseapp.com",
  databaseURL: "https://myfirstproject-3c50f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myfirstproject-3c50f",
  storageBucket: "myfirstproject-3c50f.appspot.com",
  messagingSenderId: "995374573084",
  appId: "1:995374573084:web:e84b170de3a8a2b52721d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
