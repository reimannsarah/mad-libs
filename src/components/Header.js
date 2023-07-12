import React from 'react';
import { Link } from "react-router-dom";
import { auth } from '../firebase';

function Header(props) {
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