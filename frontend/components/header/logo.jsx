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
          src="https://res.cloudinary.com/aptquirks/image/upload/v1507407412/quirks-logo_hsygfd.gif"
          alt="logo"/>
        <h1>Apartment Quirks</h1>
      </li>
    )
  }

}

export default Logo;
