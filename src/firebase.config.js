// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz_7WOc0BjR_kaayFPNWPTP0-YivRj_dM",
  authDomain: "taskmanage-633e1.firebaseapp.com",
  projectId: "taskmanage-633e1",
  storageBucket: "taskmanage-633e1.appspot.com",
  messagingSenderId: "774773761821",
  appId: "1:774773761821:web:bfdc0a7a716b844e6d23f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app