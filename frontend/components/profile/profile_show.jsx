import React from 'react';
import UploadButton from './upload_button';
import { addPhoto } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import Home from '../greeting/home';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { addPhoto, currentUser } = this.props;
    const photoUploadTitle = currentUser.thumbnail_url ? "Update" : "Add";
    const cityTitle = currentUser.city ? "Update" : "Add";
    const picturePath = currentUser.thumbnail_url ? currentUser.thumbnail_url : "http://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png";
      return (
        <section className="profile-container">
          <h1 className="profile-explanation">Complete your profile!</h1>
          <div className="divider"></div>
          <div className="profile-main-content">
            <div className="user-profile-heading">
              <figure className="profile-pic">
                <img src={picturePath} alt="profile picture"></img>
              </figure>
              <h1 className="username">Hi there, {currentUser.username}!</h1>
            </div>

            <br/>
            <div className="photo-upload">
              <h3>{photoUploadTitle} profile picture</h3>
              <UploadButton
                currentUser={currentUser}
                addPhoto={addPhoto}
               />
            </div>

            <br/>
            <h3>{cityTitle} City:</h3>
            <button>{cityTitle} City</button>
          </div>

        </section>
      )


  }
}

export default ProfileShow;
