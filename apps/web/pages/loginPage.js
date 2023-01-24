/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider, signOut , signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from "next/router";

const loginPage = (props) => {

    const router= useRouter();

    const googleAuth = new GoogleAuthProvider();


    const signInWithGoogle= async () => {
        // const result = await signInWithPopup(auth,googleAuth);
        // console.log(result);
        // // console.log(user);
        // alert("Logged In Successfull!");

        const result = await signInWithPopup(auth, googleAuth)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            alert(user.displayName + "signed in");
            console.log("User: " + user.displayName + " Token: " + token);
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            alert(errorMessage);
            // ...
        });
    }

    const signOutGoogle= async () => {
        // auth.signOut();
        const result = await signOut(auth).then(() => {
            alert("Logged Out Successfull!");
            // Sign-out successful.
            })
            .catch((error) => {
            // An error happened.
            alert(error);
        });
    }


    const handleSubmit=(e)=> {
        e.preventDefault()
        // const email = e.target.em.value;
        // const password = e.target.pass.value;

        const email = document.getElementById("em").value;
        const password = document.getElementById("pass").value;
        console.log(email,password);

        // console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Signed In with email and password!");
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
        <main>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Enter Email' id="em"/>
                <input type="password" placeholder='Enter Password' id="pass"/>
                <button>
                    <input type="submit" value="Sign In with Email"/>
                </button>
            </form>
            <div>
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
            </div>
            
        </main>
    </>
    )
}

export default loginPage
