import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ redirectHome }) => {
    return (
      <li>
        <img
          src="http://res.cloudinary.com/aptquirks/image/upload/v1497653286/lrbahix2swlowj946cpi.png"
          alt="logo"/>
        <h1><Link to="/home">Apartment Quirks</Link></h1>
      </li>
    )
}

export default Logo;
