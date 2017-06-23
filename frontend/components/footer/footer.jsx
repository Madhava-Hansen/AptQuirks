import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p className="footer-copyright">
          (c) Apartment Quirks Inc.</p>
        <section className="footer-logo">
          <img
            className="footer-pic"
            src="http://res.cloudinary.com/aptquirks/image/upload/v1497653286/lrbahix2swlowj946cpi.png"
            alt="logo"/>
          <h1 className="footer-logo-text">Apartment Quirks</h1>
        </section>
      </div>
    </footer>
  )
}

export default Footer;
