import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p className="footer-copyright">(c) 2017 Apartment Quirks LLC</p>
        <section className="footer-logo">
          <img className="footer-pic" src="assets/quirks-logo.png" alt="logo"/>
          <h1 className="footer-logo-text">Apartment Quirks</h1>
        </section>
      </div>
    </footer>
  )
}

export default Footer;
