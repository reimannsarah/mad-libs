import React, { useState } from "react";
import { auth } from './../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function SignIn() {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);


  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`You're an idiot`)
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error: ${error.message}`)
      })
  }

  function doSignIn(event) {
    event.preventDefault(event);
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`)
      })
      .catch((error) => {
        setSignInSuccess(`There as an error signing in: ${error.message}!`)
      })
  }



  return (
    <>
      <h1>Sign In</h1>
      {signInSuccess}
      <form onSubmit={doSignIn}>
        <input
          type="text"
          name="signInEmail"
          placeholder="email" />
        <input
          type="password"
          name="signInPassword"
          placeholder="Password"
        />
        <button type="submit">Sign In</button>
      </form>
      <h1>Sign Up</h1>
      {signUpSuccess}
      <form onSubmit={doSignUp}>
        <input type='email' name='email' placeholder='email' />
        <input type='password' name='password' placeholder='password' />
        <button type='submit'>Sign up</button>
      </form>
    
    </>
  )
}

export default SignIn;