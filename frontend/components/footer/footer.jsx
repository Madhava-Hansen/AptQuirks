import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterNavLinks } from "./footer_nav_links";
import CookieConsent from "react-cookie-consent";

const Footer = ({ currentUser }) => (
  <footer className="Footer">
    <FooterNavLinks isLoggedIn={currentUser} />
    <p className="Footer-foundingDate">founded 2017</p>
    <div className="Footer-iconsWrapper">
      <a
        className="Footer-socialIcon"
        target="_blank"
        href="https://www.facebook.com/apartmentquirks"
      >
        <FontAwesomeIcon size="2x" icon={["fab", "facebook"]} />
      </a>
      <a
        className="Footer-socialIcon"
        target="_blank"
        href="https://www.instagram.com/apartmentquirksco/"
      >
        <FontAwesomeIcon size="2x" icon={["fab", "instagram"]} />
      </a>
      <a
        className="Footer-socialIcon"
        target="_blank"
        href="https://twitter.com/apartmentquirks"
      >
        <FontAwesomeIcon size="2x" icon={["fab", "twitter"]} />
      </a>
    </div>
    <div className="Footer-share">
      <div
        className="fb-like"
        data-href="https://www.facebook.com/apartmentquirks/"
        data-width="300px"
        data-layout="button"
        data-action="like"
        data-size="small"
        data-share="true"
      ></div>
    </div>
    <p className="Footer-email">service@apartmentquirks.com</p>
    <p className="Footer-copyright">
      {`${String.fromCharCode(169)} 2020 Apartment Quirks`}
    </p>
    {!localStorage.getItem("acceptedCookes") && (
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        style={{ background: "#192841", color: "white" }}
        buttonStyle={{
          backgroundColor: "white",
          color: "#192841",
          fontSize: "13px",
        }}
        expires={150}
        onAccept={() => {
          localStorage.setItem("acceptedCookes", "true");
        }}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    )}
  </footer>
);

export default withRouter(Footer);
