import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import ApartmentSearchContainer from '../apartment/apartment_search_container';
import Logo from './logo';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.redirectHome = this.redirectHome.bind(this);
    this.state = { classes: "group header" };
  }

  componentDidMount() {
    this.addScrollEvent();
  }

  addScrollEvent() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        if (this.state.classes != "group opacity") {
          this.setState({ classes: "group opacity" });
        }
      } else if (window.scrollY < 200) {
        if (this.state.classes != "group header") {
          this.setState({ classes: "group header" });
        }
      }
    })
  }

  redirectHome() {
    this.props.history.push('/home');
  }

  render() {
    let hidden = this.props.location.pathname === "/home" ? true : false;
    if (hidden) {
      return (
        <header className={ this.state.classes } id="header">
          <nav className="nav">
            <ul className="nav-left">
                <Logo redirectHome={ this.redirectHome } />
            </ul>
            <GreetingContainer />
          </nav>
        </header>
      )
    } else {
      return (
        <header className={ this.state.classes } id="header">
          <nav className="nav">
            <ul className="nav-left">
                <Logo redirectHome={ this.redirectHome } />
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
