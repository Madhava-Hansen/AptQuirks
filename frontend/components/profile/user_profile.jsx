import React from "react";
import UploadButton from "./upload_button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEdit, faTimesCircle, faCheck } from '@fortawesome/fontawesome-free-solid'
import {UserProfileInput} from './user_profile_input';
import {Link, withRouter} from 'react-router-dom';
import {login} from '../../util/session_api_util';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      city: '', 
      username: '', 
      email: '', 
      inEditMode: false ,
      successModalClass: 'hidden',
      password: '',
      currentUser: null
    };
    this.defaultUserImage =  "https://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png";
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const {search} = this.props.location;
    const removedQuestionMark = search.slice(1, search.length);
    const queryStrings = {};
    removedQuestionMark.split('&').forEach(query => {
      const data = query.split('=');
      queryStrings[data[0]] = data[1];
    })
    if (queryStrings['usr'] && queryStrings['id']) {
      login({user: {username: queryStrings['usr'], password: queryStrings['id']}}).then(response => {
        this.setState({inEditMode: true, username: response.username, email: response.email, city: response.city, currentUser: true});
      })
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.currentUser) {
      const {currentUser: {city, username, email}} = nextProps;
      if (city !== prevState.city || username !== prevState.username || email !== prevState.email) {
        return {city, username, email, currentUser: nextProps.currentUser};
      }
    }

    return null;
  }

  handleUpdateUser = e => {
    const {currentUser: {id, email, username, city}, saveUser} = this.props;
    const {password} = this.state;
    const userDetails = {user: { id: id, email, username, city}};
    if (password.length >= 8) {
      userDetails.user.password = password;
    }
    saveUser(userDetails).then(() => {
      this.setState({successModalClass: 'UserProfile-successModalWrapper', inEditMode: false});
      setTimeout(() => {
        this.setState({successModalClass: 'hidden'});
      }, 2000)
    })
  };

  handleToggleEditMode = () => this.setState({inEditMode: !this.state.inEditMode});

  update = e => {
    this.props.updateUser({[e.target.name]: e.target.value})
  };

  updatePassword = e => this.setState({password: e.target.value});

  render() {
    const {addPhoto} = this.props;
    const {inEditMode, city, username, email, password, currentUser} = this.state;
    return (
      <section className="UserProfileWrapper">
        <section className="UserProfile">
          <div className="UserProfile-userGreeting">
            <h1 className="UserProfile-greetingText">
              Hi there, Apartment Hero!
            </h1>
            <FontAwesomeIcon 
              className="UserProfile-editIcon"
              size="1x" 
              icon={this.state.inEditMode ? faTimesCircle : faEdit} 
              onClick={this.handleToggleEditMode}
            />
          </div>
          {currentUser ? (
            <div className="UserProfile-mainContentWrapper">
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
          <div className="UserProfile-inputsWrapper">
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
              <p className="UserProfile-info">{username}</p>
            )}
          </div>
          <div className="UserProfile-userInfoItem">
          <div className="UserProfile-title">Update password</div>
            {inEditMode ? (
              <div className="UserProfile-passwordInputWrapper">
                <UserProfileInput
                  type="password"
                  update={this.updatePassword}
                  handleUpdateUser={this.handleUpdateUser}
                  value={password}
                />
                {(password.length < 8 && password.length > 0) && (
                  <p className="UserProfile-passwordErrorWarning">password must be minimum of 8 characters</p>
                )}
              </div>
            ) : (
              <p className="UserProfile-info">Hidden for Safety</p>
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
              <p className="UserProfile-info">{email}</p>
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
          {inEditMode && (
            <button className="UserProfile-saveButton" onClick={this.handleUpdateUser}>
              Save
            </button>
          )}
        </div>
        <div className={`${this.state.successModalClass}`}>
          <div className="UserProfile-successModalContent">
            Successfully saved! <FontAwesomeIcon className="UserProfile-checkmark" size="1x" icon={faCheck}  />
          </div>
        </div>
      </div>
        ) : (
          <h1>Please <Link to="/login">login</Link> to view your profile</h1>
        )}
      </section>
    </section>
    );
  }
}

export default withRouter(ProfileShow);
