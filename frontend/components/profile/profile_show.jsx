import React from 'react';
import UploadButton from './upload_button';
import { addPhoto } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import Home from '../greeting/home';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    debugger;
  }

  render() {
    const { addPhoto, currentUser } = this.props;
    const photoUploadTitle = currentUser.url ? "Update" : "Add";
    const cityTitle = currentUser.city ? "Update" : "Add";
    const picturePath = currentUser.url ? currentUser.thumbnail_url : "http://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png";
    debugger;
      return (
        <div>
          <h1>Hi there, {currentUser.username}!</h1>
          <img src={picturePath} alt="profile picture"></img>
          <p>This where you can update your profile or add a profile picture</p>
          <br/>
          <div className="photo-upload">
            <h3>{photoUploadTitle} your profile picture</h3>
            <UploadButton
              currentUser={currentUser}
              addPhoto={addPhoto}
             />
          </div>

          <br/>
          <h3>{cityTitle} what city you live in!</h3>
          <button>{cityTitle} City</button>

          <p>Use the search bar at the top of the page to search for apartments.</p>
        </div>
      )


  }
}

export default ProfileShow;
