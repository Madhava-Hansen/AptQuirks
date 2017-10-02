import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Home from './home';


class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.setProfilePic = this.setProfilePic.bind(this);
    this.routeToConversations = this.routeToConversations.bind(this);
    this.handleDropdownReveal = this.handleDropdownReveal.bind(this);
    this.handleMobileDropdown = this.handleMobileDropdown.bind(this);
    this.logout = this.logout.bind(this);
    this.state = { dropdown: "hidden", navRight: "nav-right" };
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
    this.setProfilePic();
  }

  logout() {
    const { logout } = this.props;
    this.handleDropdownReveal();
    window.setTimeout(logout, 500);
  }

  setProfilePic() {
    if (this.props.currentUser) {
      this.picturePath = this.props.currentUser.thumbnail_url ?
      this.props.currentUser.thumbnail_url
      : "http://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png"
    } else {
      this.picturePath = "http://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png"
    }

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.setProfilePic();
    }
  }

  routeToConversations() {
    this.props.history.push('/inbox');
  }

  render() {
    const { currentUser } = this.props;
      if (currentUser) {
    return (
      <div>
        <img onClick={this.handleMobileDropdown} className="nav-icon" src="http://res.cloudinary.com/aptquirks/image/upload/v1506655159/list-button_cdopk3.png"></img>
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

            <li className="nav-link" onClick={this.routeToConversations}>messages</li>
            <li className="nav-link" > <Link to="/home">search</Link> </li>
            <li className="nav-link" > <Link to="/profile">profile</Link> </li>
          </ul>
        </div>
      )

      } else {
        return (
          <div>
            <img onClick={this.handleMobileDropdown} className="nav-icon" src="http://res.cloudinary.com/aptquirks/image/upload/v1506655159/list-button_cdopk3.png"></img>
            <ul className={this.state.navRight}>
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
