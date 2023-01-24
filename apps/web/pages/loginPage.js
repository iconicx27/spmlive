/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider, signOut , signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from "next/router";
import Head from 'next/head';



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


    const handleSubmit=async (e)=> {
        e.preventDefault()
        // const email = e.target.em.value;
        // const password = e.target.pass.value;

        const email = document.getElementById("em").value;
        const password = document.getElementById("pass").value;
        console.log(email,password);

        // console.log(email, password);

        const result = await signInWithEmailAndPassword(auth, email, password)
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
        {/* <main>
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
            
        </main> */}


        <Head>
            <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css" />
        </Head>

        <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
            <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Login To Your Account</div>
                <button onClick={signInWithGoogle} class="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
                    <span class="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
                        <i class="fab fa-google"></i>
                    </span>
                    <span>Login with Google</span>
                </button>
                <div class="relative mt-10 h-px bg-gray-300">
                <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
                    <span class="bg-white px-4 text-xs text-gray-500 uppercase">Or Login With Email</span>
                </div>
                </div>
                <div class="mt-10">
                <form action="#" onSubmit={handleSubmit}>
                    <div class="flex flex-col mb-6">
                    <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
                    <div class="relative">
                        <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        </div>

                        <input id="em" type="email" name="email" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
                    </div>
                    </div>
                    <div class="flex flex-col mb-6">
                    <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
                    <div class="relative">
                        <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <span>
                            <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>
                        </div>

                        <input id="pass" type="password" name="password" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" />
                    </div>
                    </div>

                    <div class="flex items-center mb-6 -mt-4">
                    <div class="flex ml-auto">
                        <a href="#" class="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">Forgot Your Password?</a>
                    </div>
                    </div>

                    <div class="flex w-full">
                    <button type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                        <span class="mr-2 uppercase">Login</span>
                        <span>
                        <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </span>
                    </button>
                    </div>
                </form>
                </div>
                <div class="flex justify-center items-center mt-6">
                <button onClick={redirect} class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
                <span>
                    <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    </span>
                    <span class="ml-2"> Create New Account </span>
                </button>
                </div>
            </div>
        </div>

    </>
    )
}

export default loginPage
