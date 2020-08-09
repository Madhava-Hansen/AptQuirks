import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding} from '@fortawesome/fontawesome-free-solid';

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="logo" onClick={this.props.redirectHome}>
        <div className="logo-icon">
          <FontAwesomeIcon 
            size="2x"
            icon={faBuilding}
          />
        </div>
        <h1 className="logo-text">Apartment Quirks</h1>
      </li>
    );
  }
}

export default Logo;
