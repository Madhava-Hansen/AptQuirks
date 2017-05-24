import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import ApartmentSearchContainer from '../apartment/apartment_search_container';


const button = (logout) => (
    <button onClick={ logout }>logout</button>
);

const signupIn = () => (
  <div>
    <br/>
    <Link to="/signup">Signup</Link>
    <br/>
    <Link to="/login">Login</Link>
    <br/>
  </div>
);

const Greeting = ({ logout, currentUser }) => (
  currentUser ? button(logout) : signupIn()
);

export default Greeting;
