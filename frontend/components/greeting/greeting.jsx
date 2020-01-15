import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import Home from './home';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.routeToConversations = this.routeToConversations.bind(this);
    this.handleDropdownReveal = this.handleDropdownReveal.bind(this);
    this.handleMobileDropdown = this.handleMobileDropdown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.logInGuest = this.logInGuest.bind(this);
    this.setProfilePic = this.setProfilePic.bind(this);
    this.logout = this.logout.bind(this);
    this.state = { dropdown: "hidden", navRight: "nav-right" };
    this.picturePath = "https://res.cloudinary.com/aptquirks/image/upload/v1507410965/ksuq2q0estyfuw3y93rj.jpg"
    this.triggered = false;
  }

  handleDropdownReveal(event) {
  if (event.target.id === "pic") {
      this.toggleDropdown();
    } else if (event.target.id === "mobile-nav") {
      this.handleMobileDropdown();
    } else if (this.state.dropdown === "dropdown-class group") {
      this.setState({ dropdown: "hidden" });
    } else if (this.state.navRight === "nav-right-reveal") {
      this.setState({ navRight: 'nav-right' });
    }
  }

  handleMobileDropdown() {
    if (this.state.navRight === "nav-right") {
      this.setState({ navRight: "nav-right-reveal" });
    } else if (this.state.navRight === "nav-right-reveal") {
      this.setState({ navRight: "nav-right" });
    }
  }

  toggleDropdown() {
    if (this.state.dropdown === "hidden") {
      this.setState({ dropdown: "dropdown-class group" });
    } else {
      this.setState({ dropdown: "hidden" });
    }
  }

  componentWillMount() {
    if (this.props.location.pathname === "/") {
      this.props.history.push("/home");
    }
  }

  componentDidMount() {
    document.addEventListener("click", (event) => {
      this.handleDropdownReveal(event);
        });
  }

  logInGuest() {
    this.setState({ navRight: "nav-right" });
    this.props.login({ user: { username: "guest", password: "password" } });
  }

  logout() {
    const { logout } = this.props;
    window.setTimeout(logout, 500);
  }

  setProfilePic() {
    if (this.props.currentUser) {
      if (this.props.currentUser.thumbnail_url) {
        this.picturePath = this.props.currentUser.thumbnail_url;
      }
    }
  }

  routeToConversations() {
    this.props.history.push('/inbox');
  }

  render() {
    this.setProfilePic();
    const { currentUser } = this.props;
      if (currentUser) {
    return (
      <div className="nav-div">
        <img id="mobile-nav" className="nav-icon group" src="https://res.cloudinary.com/aptquirks/image/upload/v1506655159/list-button_cdopk3.png"></img>
          <ul className={this.state.navRight}>
            <li className="nav-link-pic">
              <figure
                id="header-profile-pic"
                 className="header-profile-pic">
                <img id="pic" src={ this.picturePath } alt="profile pic"></img>
              </figure>
              <div
                className={ this.state.dropdown }>
                <img className="dropdown-triangle" src="https://res.cloudinary.com/aptquirks/image/upload/v1521063568/triangle_butk5x.gif"></img>
                <div className="dropdown-user-info">
                  <img className="dropdown-image" src={ this.picturePath } alt="profile pic"></img>
                  <h3 className="dropdown-username">{ currentUser.username.slice(0, 6) + "..." }</h3>
                  <Link className="dropdown-my-profile" to="/profile">My Profile</Link>
                </div>
                <div className="dropdown-logout-section">
                  <Link className="dropdown-logout-button" to="/home" onClick={ this.logout }>logout</Link>
                </div>
              </div>
            </li>
            <li className="nav-link" onClick={ this.routeToConversations }>messages</li>
            <li className="nav-link" > <Link to="/home">search</Link> </li>
            <li className="nav-link" > <Link to="/profile">profile</Link> </li>
            <Link className="logout" to="/home" onClick={ this.logout }>logout</Link>
          </ul>
        </div>
      )

      } else {
        return (
          <div className="nav-div">
            <img id="mobile-nav" className="nav-icon group" src="https://res.cloudinary.com/aptquirks/image/upload/v1506655159/list-button_cdopk3.png"></img>
            <ul className={ this.state.navRight }>
              {/* <li onClick={ this.logInGuest }className="nav-link guest">guest</li> */}
              <li className="nav-link" ><Link to="/home">search</Link></li>
              <li className="nav-link" ><Link to="/signup">Signup</Link></li>
              <li className="nav-link" ><Link to="/login">Login</Link></li>
            </ul>
          </div>

        )
      }
  }

}

export default withRouter(Greeting);
