import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0PMfHVtOXCjWJG-IchHtY_DVUGAesS70",
  authDomain: "spm-demo-6f1c3.firebaseapp.com",
  projectId: "spm-demo-6f1c3",
  storageBucket: "spm-demo-6f1c3.appspot.com",
  messagingSenderId: "1003404417038",
  appId: "1:1003404417038:web:58cb92e5ab868128d5c45f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    localStorage.setItem("token", user?.accessToken);
    console.log(user?.accessToken);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, signInWithGoogle, signInWithEmailAndPassword, logout };