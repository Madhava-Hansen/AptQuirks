import React from "react";
import { Link } from "react-router-dom";

export const FooterNavLinks = ({ isLoggedIn }) => {
  return (
    <ul className="FooterNavContainer">
      {isLoggedIn ? (
        <>
          <li className="FooterNavContainer-link">
            {" "}
            <Link to="/inbox">messages</Link>
          </li>
          <li className="FooterNavContainer-link">
            {" "}
            <Link to="/home">search</Link>{" "}
          </li>
          <li className="FooterNavContainer-link">
            {" "}
            <Link to="/profile">profile</Link>{" "}
          </li>
        </>
      ) : (
        <>
          <li className="FooterNavContainer-link">
            {" "}
            <Link to="/login">login</Link>
          </li>
          <li className="FooterNavContainer-link">
            {" "}
            <Link to="/signup">signup</Link>{" "}
          </li>
          <li className="FooterNavContainer-link">
            {" "}
            <Link to="/home">search</Link>{" "}
          </li>
        </>
      )}
    </ul>
  );
};
