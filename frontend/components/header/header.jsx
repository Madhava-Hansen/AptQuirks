import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import ApartmentSearchContainer from '../apartment/apartment_search_container';
import Logo from './logo';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.redirectHome = this.redirectHome.bind(this);
  }

  redirectHome() {
    this.props.history.push('/home');
  }

  render() {
    let hidden = this.props.location.pathname === "/home" ? true : false;
    let classes = "group header";
    if (hidden) {
      return (
        <header className={classes}>
          <nav className="nav">
            <ul className="nav-left">
                <Logo redirectHome={this.redirectHome} />
            </ul>
            <GreetingContainer className="nav-right" />
          </nav>
        </header>
      )
    } else {
      return (
        <header className={classes}>
          <nav className="nav">
            <ul className="nav-left">
                <Logo redirectHome={this.redirectHome} />
            </ul>
            <ul className="nav-middle">
              <li><ApartmentSearchContainer /></li>
            </ul>
              <GreetingContainer className="nav-right"  />
          </nav>
        </header>
      )
    }
  }


}

export default withRouter(Header);
