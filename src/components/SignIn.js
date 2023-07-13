import React, { useState } from "react";
import { auth } from './../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

function SignIn(props) {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const username = event.target.username.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`You're an idiot`)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`)
          setTimeout(() => props.onClickSignIn(), 1000);
          updateProfile(auth.currentUser, {
            displayName: username
          }).then(() => {
            setUpdateSuccess('Profile updated!')
          })
          .catch((error) => {
            setUpdateSuccess(`There was an error updating: ${error.message}!`)
          })
        })
        .catch((error) => {
          setSignInSuccess(`There as an error signing in: ${error.message}!`)
        })
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
        setTimeout(() => props.onClickSignIn(), 1000);
      })
      .catch((error) => {
        setSignInSuccess(`There as an error signing in: ${error.message}!`)
      })
  }

  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      {signInSuccess}
      <form className="sign-in-up-form" onSubmit={doSignIn}>
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
      {updateSuccess}
      <form className="sign-in-up-form" onSubmit={doSignUp}>
        <input type='text' name='username' placeholder='username' />
        <input type='email' name='email' placeholder='email' />
        <input type='password' name='password' placeholder='password' />
        <button type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default SignIn;