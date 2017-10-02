import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <ul className="footer-nav">
          <li>messages</li>
          <li>search</li>
          <li>profile</li>
        </ul>
        <section className="footer-logo">
          <img
            className="footer-pic"
            src="http://res.cloudinary.com/aptquirks/image/upload/v1497653286/lrbahix2swlowj946cpi.png"
            alt="logo"/>
          <h1 className="footer-logo-text">Apartment Quirks</h1>
        </section>
        <img className="social-icons" src="http://res.cloudinary.com/aptquirks/image/upload/v1506985694/apt_quirks_social_icons_zlnudw.png" atl="social-icons"></img>
        <p className="footer-copyright">
          (c) 2017 Apartment Quirks Inc.</p>
      </div>
    </footer>
  )
}

export default Footer;
