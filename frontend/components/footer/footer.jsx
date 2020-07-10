import React from "react";
import {withRouter} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FooterNavLinks} from "./footer_nav_links";
import {FacebookProvider, Like} from 'react-facebook';

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
    <div className="Footer-share">
      <FacebookProvider appId="907197889774664">
        <Like href="http://www.facebook.com/apartmentquirks" colorScheme="dark" showFaces share />
      </FacebookProvider>
    </div>
    <p className="Footer-email">service@apartmentquirks.com</p>
    <p className="Footer-copyright">
      {`${String.fromCharCode(169)} 2020 Apartment Quirks Inc.`}
    </p>
  </footer>

export default withRouter(Footer);
