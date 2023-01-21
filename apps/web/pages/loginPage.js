/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from "next/router";
import  styles  from "../styles/common.module.css";

const loginPage = (props) => {

    const router= useRouter();
    const [user,setUser] = useAuthState(auth)
    const googleAuth = new GoogleAuthProvider();


    const signInWithGoogle= async () => {
        const result = await signInWithPopup(auth,googleAuth);
        console.log(result);
        // console.log(user);
        alert("Logged In Successfull!");
    }

    const signOutGoogle= async () => {
        // auth.signOut();
        signOut(auth).then(() => {
            alert("Logged Out Successfull!");
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            alert(error);
          });
    }


    const handleSubmit=(e)=> {
        e.preventDefault()
        const email = e.target.em.value;
        const password = e.target.pass.value;
        // console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("SignIn with email and password!");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });

    }
    

    const redirect =()=>{
        router.push("/signUpPage");
    }




    return (
    <>
        <main className={styles.flexColumn}>
            
            <form onSubmit={handleSubmit}>
                <input className={styles.formI} type="email" placeholder='Enter Email' id="em"/>
                <input type="password" placeholder='Enter Password' id="pass"/>
                <button>
                    <input type="submit" value="Sign In with Email"/>
                </button>
            </form>

            <div >            
                <button onClick={redirect}>Sign Up with Email</button>
            </div>

            <div>             
                <button onClick={signInWithGoogle}>
                    Login with google!
                </button>
            </div>
            <div>
                <button onClick={signOutGoogle}>
                    SignOut!
                </button>
            </div>
        </main>
    </>
    )
}

export default loginPage
