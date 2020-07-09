import React from "react";
import {withRouter} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FooterNavLinks} from "./footer_nav_links";

const Footer = ({currentUser}) => 
  <footer className="Footer">
    <FooterNavLinks isLoggedIn={currentUser} />
    <div className="Footer-iconsWrapper">
      <a target="_blank" href="https://www.facebook.com/apartmentquirks/">
        <FontAwesomeIcon size="2x" icon={["fab", "facebook"]} />
      </a>
      <a target="_blank" href="https://www.instagram.com/nesnahmade">
        <FontAwesomeIcon size="2x" icon={["fab", "instagram"]} />
      </a>
    </div>
    <div className='Footer-facebookEmbed'>
      <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', margin: '12px 0', color: 'steelblue'}} className="fb-like" data-href="https://www.facebook.com/apartmentquirks/" data-width="350" data-layout="button" data-action="like" data-size="large" data-share="true"></div>
    </div>
    <p className="Footer-email">service@apartmentquirks.com</p>
    <p className="Footer-copyright">
      {`${String.fromCharCode(169)} 2020 Apartment Quirks Inc.`}
    </p>
  </footer>

export default withRouter(Footer);
