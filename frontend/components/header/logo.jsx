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
          {/* <FontAwesomeIcon 
            size="2x"
            icon={faBuilding}
          /> */}
          <img src="https://res.cloudinary.com/aptquirks/image/upload/v1597259623/Screen_Shot_2020-08-11_at_3.57.32_PM_qqvtut.png"></img>
        </div>
        <h1 className="logo-text">Apartment Quirks</h1>
      </li>
    );
  }
}

export default Logo;
