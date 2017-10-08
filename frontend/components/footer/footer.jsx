import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Footer = () => {

  let backToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <footer>
      <div onClick={ backToTop } className="back-to-top">
        <p className="back-to-top-text">back to top</p>
      </div>
      <div className="footer-nav-container">
        <ul className="footer-nav">
          <li className="nav-link-footer" > <Link to="/inbox">messages</Link></li>
          <li className="nav-link-footer" > <Link to="/home">search</Link> </li>
          <li className="nav-link-footer" > <Link to="/profile">profile</Link> </li>
        </ul>
      </div>
      <div className="footer-content">
        <section className="footer-logo">
          <img
            className="footer-pic"
            src="http://res.cloudinary.com/aptquirks/image/upload/v1497653286/lrbahix2swlowj946cpi.png"
            alt="logo"/>
          <h1 className="footer-logo-text">Apartment Quirks</h1>
        </section>
        <p className="footer-copyright">
          (c) 2017 Apartment Quirks Inc.</p>
      </div>
    </footer>
  )
}

export default withRouter(Footer);
