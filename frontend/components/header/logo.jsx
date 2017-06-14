import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ redirectHome }) => (
  <li>
    <img src="assets/quirks-logo.png" alt="logo"/>
    <h1><Link to="/home">Apartment Quirks</Link></h1>
  </li>
)

export default Logo;
