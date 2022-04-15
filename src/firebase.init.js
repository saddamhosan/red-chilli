// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_FbIWq_bvyBJqwbO0QnDRNOS5Y6jp9WA",
  authDomain: "red-chilli-20827.firebaseapp.com",
  projectId: "red-chilli-20827",
  storageBucket: "red-chilli-20827.appspot.com",
  messagingSenderId: "583715223047",
  appId: "1:583715223047:web:78b6f228747d040ce35ca2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth