import React from 'react'
import {signOut, createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from './firebase';

const signUpPage = (props) => {

    const handleSubmit=(e)=> {
        e.preventDefault()
        const email = e.target.em.value;
        const password = e.target.pass.value;
        // console.log(email, password);

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Created User Succesfully!")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" id="em"/>
                <input type="password" id="pass"/>
                <button>
                    <input type="submit" value="Sign Up with Email" />
                </button>
            </form>
        </div>
    )
}

export default signUpPage
