import React from 'react';
import { Link } from "react-router-dom";
import { auth } from '../firebase';

function Header() {
  let currentlyGuyBeingGuy = null;
  let userGreetingTheGUy = null;
  if (auth.currentUser == null) {
    currentlyGuyBeingGuy = 
    <Link to="/sign-in" className='nav-link'>Sign In</Link>  
  } else if (auth.currentUser != null) {
    currentlyGuyBeingGuy = 
    <Link to="./sign-out" className='nav-link'>Sign Out</Link>
    userGreetingTheGUy = auth.currentUser.email
  }

  return (
    <div className='header'>
    <h1>Dragon Grag Libs</h1>
    <ul className='nav'>
      <li>
        <Link to="/" className='nav-link'>Home</Link>
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