import React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className="logo"  onClick={this.props.redirectHome}>
        <img
          src="http://res.cloudinary.com/aptquirks/image/upload/v1497653286/lrbahix2swlowj946cpi.png"
          alt="logo"/>
        <h1>Apartment Quirks</h1>
      </li>
    )
  }

}

export default Logo;
