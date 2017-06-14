import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Home from './home';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.setProfilePic = this.setProfilePic.bind(this);
  }

  componentWillMount() {
    if (this.props.location.pathname === "/") {
      this.props.history.push("/home");
    }
    this.setProfilePic();
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

  render() {
    const { currentUser, logout } = this.props;
      if (currentUser) {
    return (
          <ul className="nav-right">
            <li className="nav-link-pic">
              <figure className="header-profile-pic">
                <img src={this.picturePath} alt="profile pic"></img>
              </figure>
            </li>
            <li className="nav-link">
              <Link to="/home" onClick={ logout }>logout</Link>
            </li>
            <li className="nav-link" ><Link to="/home">search</Link></li>
            <li className="nav-link" ><Link to="/profile">profile</Link></li>
          </ul>
      )

      } else {
        return (
            <ul className="nav-right">
              <li className="nav-link" ><Link to="/home">search</Link></li>
              <li className="nav-link" ><Link to="/signup">Signup</Link></li>
              <li className="nav-link" ><Link to="/login">Login</Link></li>
            </ul>
        )
      }
  }


}

export default withRouter(Greeting);
