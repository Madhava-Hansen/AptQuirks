import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.backToTop = this.backToTop.bind(this);
  }


   backToTop() {
    window.scrollTo(0, 0);
   }

  render() {
    if (this.props.currentUser) {
      return (
        <footer>
          <div onClick={ this.backToTop } className="back-to-top">
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
                src="https://res.cloudinary.com/aptquirks/image/upload/v1497653286/lrbahix2swlowj946cpi.png"
                alt="logo"/>
              <h1 className="footer-logo-text">Apartment Quirks</h1>
            </section>
            <div className="footer-social-icons">
              <SocialIcon url="https://www.facebook.com/apartmentquirks/"/>
              <SocialIcon url="https://www.instagram.com/nesnahmade/"/>
            </div>
            <p className="footer-copyright">
              {`${String.fromCharCode(169)} 2020 Apartment Quirks Inc.`}
            </p>
          </div>
        </footer>
      )
    } else {
      return (
        <footer>
          <div onClick={ this.backToTop } className="back-to-top">
            <p className="back-to-top-text">back to top</p>
          </div>
          <div className="footer-nav-container">
            <ul className="footer-nav">
              <li className="nav-link-footer" > <Link to="/login">login</Link></li>
              <li className="nav-link-footer" > <Link to="/signup">signup</Link> </li>
              <li className="nav-link-footer" > <Link to="/home">search</Link> </li>
            </ul>
          </div>
          <div className="footer-content">
            <section className="footer-logo">
              <img
                className="footer-pic"
                src="https://res.cloudinary.com/aptquirks/image/upload/v1497653286/lrbahix2swlowj946cpi.png"
                alt="logo"/>
              <h1 className="footer-logo-text">Apartment Quirks</h1>
            </section>
            <p className="footer-copyright">
              Apartment Quirks</p>
          </div>
        </footer>
      )
    }
  }

}

export default withRouter(Footer);
