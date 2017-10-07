import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Home from './home';


class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.routeToConversations = this.routeToConversations.bind(this);
    this.handleDropdownReveal = this.handleDropdownReveal.bind(this);
    this.handleMobileDropdown = this.handleMobileDropdown.bind(this);
    this.setProfilePic = this.setProfilePic.bind(this);
    this.hideNavDropdown = this.hideNavDropdown.bind(this);
    this.logout = this.logout.bind(this);
    this.state = { dropdown: "hidden", navRight: "nav-right" };
    this.picturePath = "http://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png"
  }

  handleDropdownReveal() {
    if (this.state.dropdown === "hidden") {
      this.setState({ dropdown: "dropdown-class group" });
    } else {
      this.setState({ dropdown: "hidden" });
    }
  }

  handleMobileDropdown() {
    if (this.state.navRight === "nav-right") {
      this.setState({ navRight: "nav-right-reveal" });
    } else {
      this.setState({ navRight: "nav-right" });
    }
  }

  componentWillMount() {
    if (this.props.location.pathname === "/") {
      this.props.history.push("/home");
    }
  }

  logout() {
    const { logout } = this.props;
    this.handleDropdownReveal();
    window.setTimeout(logout, 500);
  }

  hideNavDropdown() {
    this.setState({ navRight: "nav-right" });
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
        <img onClick={this.handleMobileDropdown} className="nav-icon group" src="http://res.cloudinary.com/aptquirks/image/upload/v1506655159/list-button_cdopk3.png"></img>
          <ul className={this.state.navRight}>
            <li className="nav-link-pic">
              <figure
                onClick={ this.handleDropdownReveal }
                 className="header-profile-pic">
                <img src={this.picturePath} alt="profile pic"></img>
              </figure>
              <div
                className={ this.state.dropdown }>
                <img className="dropdown-image" src={ this.picturePath } alt="profile pic"></img>
                <h3 className="dropdown-username">{currentUser.username}</h3>
                <Link className="dropdown-logout-button" to="/home" onClick={ this.logout }>logout</Link>
              </div>
            </li>

            <li onClick={this.hideNavDropdown} className="nav-link" onClick={this.routeToConversations}>messages</li>
            <li onClick={this.hideNavDropdown} className="nav-link" > <Link to="/home">search</Link> </li>
            <li onClick={this.hideNavDropdown} className="nav-link" > <Link to="/profile">profile</Link> </li>
            <Link className="logout" to="/home" onClick={ this.logout }>logout</Link>
          </ul>
        </div>
      )

      } else {
        return (
          <div className="nav-div">
            <img onClick={this.handleMobileDropdown} className="nav-icon group" src="http://res.cloudinary.com/aptquirks/image/upload/v1506655159/list-button_cdopk3.png"></img>
            <ul className={this.state.navRight}>
              <li onClick={this.hideNavDropdown} className="nav-link" ><Link to="/home">search</Link></li>
              <li onClick={this.hideNavDropdown} className="nav-link" ><Link to="/signup">Signup</Link></li>
              <li onClick={this.hideNavDropdown} className="nav-link" ><Link to="/login">Login</Link></li>
            </ul>
          </div>

        )
      }
  }


}

export default withRouter(Greeting);
