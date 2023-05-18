// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw1f_rjbq7_Z_bDXRjt_p9fHHixcmTJoA",
  authDomain: "action-toys.firebaseapp.com",
  projectId: "action-toys",
  storageBucket: "action-toys.appspot.com",
  messagingSenderId: "505716749532",
  appId: "1:505716749532:web:3b96ad6c44b338a0ff7019"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;