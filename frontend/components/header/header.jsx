import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import ApartmentSearchContainer from '../apartment/apartment_search_container';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.redirectHome = this.redirectHome.bind(this);
  }

  redirectHome() {
    debugger;
    this.props.history.push('/home');
  }

  render() {
    let hidden = this.props.location.pathname === "/home" ? true : false;
    let classes = "group header";
    if (hidden) {
      return (
        <header className={classes}>
          <nav className="nav">
            <ul onClick={console.log('clicked')} className="nav-left">
              <li>
                <img src="assets/quirks-logo.png" alt="logo"/>
                <h1>Apartment Quirks</h1>
              </li>
            </ul>
            <ul className="nav-middle">
              <li></li>
            </ul>
            <ul className="nav-right">
              <li><GreetingContainer /></li>
            </ul>
          </nav>
        </header>
      )
    } else {
      return (
        <header className={classes}>
          <nav className="nav">
            <ul className="nav-left">
              <li>
                <img src="assets/quirks-logo.png" alt="logo"/>
                <h1>Apartment Quirks</h1>
              </li>
            </ul>
            <ul className="nav-middle">
              <li><ApartmentSearchContainer /></li>
            </ul>
              <GreetingContainer />
          </nav>
        </header>
      )
    }
  }


}

export default withRouter(Header);
