// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADQ_397L2qhSx4Fk54pPdK94hwIF-c3ik",
  authDomain: "ecommerce-web-9dacd.firebaseapp.com",
  projectId: "ecommerce-web-9dacd",
  storageBucket: "ecommerce-web-9dacd.appspot.com",
  messagingSenderId: "1014594102252",
  appId: "1:1014594102252:web:0a2cd0c8dca0f44633d6c9",
  measurementId: "G-XX6H79YSRV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);