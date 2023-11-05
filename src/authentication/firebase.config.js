// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWfZwO5w5hXf7VZlGmta5Ebk32KDBWbRA",
  authDomain: "blog-spectrum.firebaseapp.com",
  projectId: "blog-spectrum",
  storageBucket: "blog-spectrum.appspot.com",
  messagingSenderId: "970011546449",
  appId: "1:970011546449:web:3cf07e197287625813b970"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth