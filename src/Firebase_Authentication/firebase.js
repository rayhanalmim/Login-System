import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs6TM9UUBLD6p04j9iCMCdtMH-tVflCXY",
  authDomain: "login-base-project-2a602.firebaseapp.com",
  projectId: "login-base-project-2a602",
  storageBucket: "login-base-project-2a602.appspot.com",
  messagingSenderId: "238139202424",
  appId: "1:238139202424:web:fa0319abe3db23b566c68d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;