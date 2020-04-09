import React from "react";
import UploadButton from "./upload_button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEdit, faTimesCircle } from '@fortawesome/fontawesome-free-solid'
import {UserProfileInput} from './user_profile_input';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      city: '', 
      username: '', 
      email: '', 
      inEditMode: false 
    };
    this.defaultUserImage =  "https://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png";
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleUpdateUser = e => {
    const {currentUser: {id}, updateUser} = this.props;
    const {name} = e.target;
    const user = {user: { id: id, [name]: this.state[name] }};
    updateUser(user).then(this.setState({ [name]: "" }));
  };

  handleToggleEditMode = () => this.setState({inEditMode: !this.state.inEditMode});

  update = e => this.setState({[e.target.name]: e.target.value});

  render() {
    const {addPhoto, currentUser} = this.props;
    const {inEditMode, city, username, email} = this.state;
    return (
        <section className="UserProfile">
          <div className="UserProfile-userGreeting">
            <h1>
              Hi there, Apartment Hero!
            </h1>
            <FontAwesomeIcon 
              className="UserProfile-editIcon"
              size="1x" 
              icon={this.state.inEditMode ? faTimesCircle : faEdit} 
              onClick={this.handleToggleEditMode}
            />
          </div>
          <div className="UserProfile-heading">
              <figure className="UserProfile-pic">
                <img src={currentUser.thumbnail_url || this.defaultUserImage} alt="profile picture"></img>
              </figure>
            <div className="photo-upload">
              <UploadButton 
                buttonName={"change photo"} 
                currentUser={currentUser} 
                addPhoto={addPhoto} 
                class="UserProfile-imageUploadButton"
              />
            </div>
          </div>
          <div className="UserProfile-mainContentWrapper">
          <div className="UserProfile-userInfoItem">
            <div className="UserProfile-title">Username</div>
            {inEditMode ? (
              <UserProfileInput
              type="username"
              update={this.update}
              handleUpdateUser={this.handleUpdateUser}
              value={username}
              />
            ) : (
              <p className="UserProfile-info">{currentUser.username}</p>
            )}
          </div>
          <div className="UserProfile-userInfoItem">
            <div className="UserProfile-title">Email</div>
            {inEditMode ? (
              <UserProfileInput
              type="email"
              update={this.update}
              handleUpdateUser={this.handleUpdateUser}
              value={email}
              />
            ) : (
              <p className="UserProfile-info">{currentUser.email}</p>
            )}
          </div>
          <div className="UserProfile-userInfoItem">
            <div className="UserProfile-title">City</div>
            {inEditMode ? (
              <UserProfileInput
              type="city"
              update={this.update}
              handleUpdateUser={this.handleUpdateUser}
              value={city}
              />
            ) : (
              <p className="UserProfile-info">
                {currentUser.city ? currentUser.city : 'add your city here!'}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default ProfileShow;
