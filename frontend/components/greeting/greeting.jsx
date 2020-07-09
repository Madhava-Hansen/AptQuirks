import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { GreetingNavLink } from "./greeting_nav_link";
import { GreetingSocialLink } from "./greeting_social_link";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.location = window.location.href.split("/").pop();
    this.state = {
      dropdown: "hidden",
      navRight: "nav-right",
      isSocialOpen: false,
      currentUrl: this.location,
    };
    this.picturePath =
      "https://res.cloudinary.com/aptquirks/image/upload/v1507410965/ksuq2q0estyfuw3y93rj.jpg";
    this.triggered = false;
  }

  componentDidMount() {
    document.addEventListener("click", (event) => {
      this.handleDropdownReveal(event);
    });
    if (this.props.location.pathname === "/") {
      this.props.history.push("/home");
    }
  }

  handleDropdownReveal = (event) => {
    if (event.target.id === "social-link") {
      return;
    } else if (event.target.id === "pic") {
      this.toggleDropdown();
    } else if (event.target.id === "mobile-nav") {
      this.handleMobileDropdown(event);
    } else if (this.state.dropdown === "dropdown-class group") {
      this.setState({ dropdown: "hidden" });
    } else if (this.state.navRight === "nav-right-reveal") {
      this.setState({ navRight: "nav-right" });
    }
  };

  handleMobileDropdown = () => {
    if (this.state.navRight === "nav-right") {
      this.setState({ navRight: "nav-right-reveal" });
    } else if (this.state.navRight === "nav-right-reveal") {
      this.setState({ navRight: "nav-right" });
    }
  };

  toggleDropdown = () => {
    if (this.state.dropdown === "hidden") {
      this.setState({ dropdown: "dropdown-class group" });
    } else {
      this.setState({ dropdown: "hidden" });
    }
  };

  logInGuest = () => {
    this.setState({ navRight: "nav-right" });
    this.props.login({ user: { username: "guest", password: "password" } });
  };

  logout = () => {
    const { logout } = this.props;
    setTimeout(logout, 500);
  };

  setProfilePic = () => {
    const { currentUser } = this.props;
    if (currentUser && currentUser.thumbnail_url) {
      this.picturePath = this.props.currentUser.thumbnail_url;
    }
  };

  handleRedirect = (urlParam) => {
    this.props.history.push(`/${urlParam}`);
    this.setState({ currentUrl: urlParam });
  };

  handleClickSocial = () => {
    this.setState({ isSocialOpen: !this.state.isSocialOpen });
  };

  render() {
    this.setProfilePic();
    const { currentUser } = this.props;
    if (currentUser) {
      return (
        <div className="nav-div">
          <img
            id="mobile-nav"
            className="nav-icon group"
            src="https://res.cloudinary.com/aptquirks/image/upload/v1506655159/list-button_cdopk3.png"
          ></img>
          <ul className={this.state.navRight}>
            <li className="nav-link-pic">
              <figure id="header-profile-pic" className="header-profile-pic">
                <img id="pic" src={this.picturePath} alt="profile pic"></img>
              </figure>
              <div className={this.state.dropdown}>
                <img
                  className="dropdown-triangle"
                  src="https://res.cloudinary.com/aptquirks/image/upload/v1521063568/triangle_butk5x.gif"
                ></img>
                <div className="dropdown-user-info">
                  <img
                    className="dropdown-image"
                    src={this.picturePath}
                    alt="profile pic"
                  ></img>
                  <h3 className="dropdown-username">
                    {currentUser.username.slice(0, 6) + "..."}
                  </h3>
                  <NavLink
                    activeClassName="isActive"
                    className="dropdown-my-profile"
                    to="/profile"
                  >
                    My Profile
                  </NavLink>
                </div>
                <div className="dropdown-logout-section">
                  <NavLink
                    activeClassName="isActive"
                    className="dropdown-logout-button"
                    to="/home"
                    onClick={this.logout}
                  >
                    logout
                  </NavLink>
                </div>
              </div>
            </li>
            <GreetingNavLink
              currentUrl={this.state.currentUrl}
              urlParam="home"
              handleClick={() => this.handleRedirect("home")}
              linkName={"search"}
            />
            <GreetingSocialLink
              handleClick={() => this.handleClickSocial()}
              isSocialOpen={this.state.isSocialOpen}
            />
            <GreetingNavLink
              currentUrl={this.state.currentUrl}
              urlParam="inbox"
              handleClick={() => this.handleRedirect("inbox")}
              linkName={"messages"}
            />
            <GreetingNavLink
              currentUrl={this.state.currentUrl}
              urlParam="profile"
              handleClick={() => this.handleRedirect("profile")}
              linkName={"profile"}
            />
            <NavLink className="logout" to="/home" onClick={this.logout}>
              logout
            </NavLink>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="nav-div">
          <img
            id="mobile-nav"
            className="nav-icon group"
            src="https://res.cloudinary.com/aptquirks/image/upload/v1506655159/list-button_cdopk3.png"
          ></img>
          <ul className={this.state.navRight}>
            <GreetingNavLink
              currentUrl={this.state.currentUrl}
              urlParam="home"
              handleClick={() => this.handleRedirect("home")}
              linkName={"search"}
            />
            {/* <li onClick={ this.logInGuest }className="nav-link guest">guest</li> */}
            <GreetingSocialLink
              handleClick={() => this.handleClickSocial()}
              isSocialOpen={this.state.isSocialOpen}
            />
            <GreetingNavLink
              currentUrl={this.state.currentUrl}
              urlParam="signup"
              handleClick={() => this.handleRedirect("signup")}
              linkName={"signup"}
            />
            <GreetingNavLink
              currentUrl={this.state.currentUrl}
              urlParam="login"
              handleClick={() => this.handleRedirect("login")}
              linkName={"login"}
            />
          </ul>
        </div>
      );
    }
  }
}

export default withRouter(Greeting);
