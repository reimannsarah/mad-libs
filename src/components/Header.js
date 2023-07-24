import React from 'react';
import { auth } from '../firebase';

function Header(props) {
  let currentlyGuyBeingGuy = null;
  let userGreetingTheGUy = null;
  if (auth.currentUser == null) {
    currentlyGuyBeingGuy = 
    <button onClick={props.onSignInClick}>Sign In</button>  
  } else if (auth.currentUser != null) {
    currentlyGuyBeingGuy = 
    <button onClick={props.onSignOutClick} className='nav-link'>Sign Out</button>
    userGreetingTheGUy = (auth.currentUser.displayName) ? auth.currentUser.displayName : auth.currentUser.email
  }

  return (
    <div className='header'>
    <h1>Dragon Mad Libs</h1>
    <ul className='nav'>
      <li>
        <button onClick={props.onHomeClick}>Home</button>
      </li>
      <li>
        {currentlyGuyBeingGuy}
      </li>
    </ul>
    <p>{userGreetingTheGUy}</p>
    </div>
  )
}
export default Header;