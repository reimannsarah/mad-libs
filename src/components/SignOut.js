import React, { useState } from "react";
import { auth } from './../firebase'
import { signOut } from 'firebase/auth';

function SignOut() {
  const [signOutSucess, setSignOutSuccess] = useState(null);

  function doSignOut() {
    signOut(auth)
      .then(function () {
        setSignOutSuccess("You have successfully signed out!");
      }).catch((error) => {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`)
      });
  }
  return (
    <div>
      <h1>Sign Out</h1>
      {signOutSucess}
      <br />
      <button onClick={doSignOut}>Sign Out</button>
    </div>
  )
}

export default SignOut;