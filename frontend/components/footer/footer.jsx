import React from "react";
import {withRouter} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FooterNavLinks} from "./footer_nav_links";

const Footer = ({currentUser}) => 
  <footer className="Footer">
    <FooterNavLinks isLoggedIn={currentUser} />
    <div className="Footer-iconsWrapper">
      <a className="Footer-socialIcon" target="_blank" href="https://www.facebook.com/apartmentquirks">
        <FontAwesomeIcon size="2x" icon={["fab", "facebook"]} />
      </a>
      <a className="Footer-socialIcon" target="_blank" href="https://www.instagram.com/apartmentquirksco/">
        <FontAwesomeIcon size="2x" icon={["fab", "instagram"]} />
      </a>
      <a className="Footer-socialIcon" target="_blank" href="https://twitter.com/apartmentquirks">
        <FontAwesomeIcon size="2x" icon={["fab", "twitter"]} />
      </a>
    </div>
    <div className="Footer-share">
      <div className="fb-like" data-href="https://www.facebook.com/apartmentquirks/" data-width="300px" data-layout="button" data-action="like" data-size="small" data-share="true"></div>
    </div>
    <p className="Footer-email">service@apartmentquirks.com</p>
    <p className="Footer-copyright">
      {`${String.fromCharCode(169)} 2020 Apartment Quirks Inc.`}
    </p>
  </footer>

export default withRouter(Footer);
