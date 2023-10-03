// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBszcbRjgtHW5Vn8_cs88_UPDgZOzxDnDc",
  authDomain: "auth-moha-milon-e5fe8.firebaseapp.com",
  projectId: "auth-moha-milon-e5fe8",
  storageBucket: "auth-moha-milon-e5fe8.appspot.com",
  messagingSenderId: "96339852536",
  appId: "1:96339852536:web:a332e6223122827f754f0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;