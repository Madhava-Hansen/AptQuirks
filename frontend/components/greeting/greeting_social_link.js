import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GreetingSocialLink = ({ handleClick, isSocialOpen }) => (
  <li className="nav-link social-link" onClick={handleClick}>
    <p id="social-link">social</p>
    <div className={isSocialOpen ? " social-popover" : " hidden"}>
      <img
        className="social-dropdown-triangle"
        src="https://res.cloudinary.com/aptquirks/image/upload/v1521063568/triangle_butk5x.gif"
      ></img>
      <a target="_blank" href="https://www.facebook.com/apartmentquirks/">
        <FontAwesomeIcon
          className="social-icon-popover"
          size="2x"
          icon={["fab", "facebook"]}
        />
      </a>
      <a target="_blank" href="https://www.instagram.com/nesnahmade">
        <FontAwesomeIcon
          className="social-icon-popover"
          size="2x"
          icon={["fab", "instagram"]}
        />
      </a>
      <a target="_blank" href="https://twitter.com/apartmentquirks">
        <FontAwesomeIcon 
          className="social-icon-popover"
          size="2x" 
          icon={["fab", "twitter"]} 
        />
      </a>
    </div>
  </li>
);
