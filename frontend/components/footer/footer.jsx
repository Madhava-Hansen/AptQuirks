import React from 'react';
import {withRouter} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {FooterNavLinks} from './footer_nav_links';

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.backToTop = this.backToTop.bind(this);
  }

   backToTop() {
    window.scrollTo(0, 0);
   }

  render() {
      return (
        <footer>
          <div onClick={ this.backToTop } className="back-to-top">
            <p className="back-to-top-text">back to top</p>
          </div>
          <FooterNavLinks isLoggedIn={this.props.currentUser}/>
          <div className="footer-content">
            <div className="footer-icons">
              <a target="_blank" href="https://www.facebook.com/apartmentquirks/">
                <FontAwesomeIcon 
                  className="social-icon" 
                  size="2x" 
                  icon={['fab', 'facebook']} 
                  url="www.google.com"
                  />
              </a>
              <a target="_blank" href="https://www.instagram.com/nesnahmade">
                <FontAwesomeIcon 
                  className="social-icon" 
                  size="2x" 
                  icon={['fab', 'instagram']} 
                />
              </a>
            </div>
            <p className="footer-copyright">
              {`${String.fromCharCode(169)} 2020 Apartment Quirks Inc.`}
            </p>
          </div>
        </footer>
      )
  }

}

export default withRouter(Footer);
