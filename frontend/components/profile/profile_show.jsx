import React from 'react';
import UploadButton from './upload_button';
import { addPhoto } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import Home from '../greeting/home';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {city: ""};
    this.handleAddCity = this.handleAddCity.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleAddCity(e) {
    e.preventDefault();
    const user = { user: { id: this.props.currentUser.id, city: this.state.city } };
    this.props.updateUser(user).then(
      this.setState({city: ""})
    )
  }

  update(city) {
    return e => this.setState({
      [city]: e.currentTarget.value
    });
  }

  render() {
    const { addPhoto, currentUser } = this.props;
    const photoUploadTitle = currentUser.thumbnail_url ? "Update" : "Add";
    const cityTitle = currentUser.city ? "Update" : "Add";
    const picturePath = currentUser.url ? currentUser.url : "https://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png";
      return (
        <section className="ProfileContainer">
          <h1 className="ProfileContainer-explanation">Welcome to your profile</h1>
          <div className="ProfileContainer-profileMainContent">
            <div className="ProfileContainer-userProfileHeading">
              <figure className="ProfileContainer-profilePic">
                <img src={ picturePath } alt="profile picture"></img>
              </figure>
              <h1 className="ProfileContainer-username">Hi there, {currentUser.username}!</h1>
            </div>
            <div className="photo-upload">
              <h3 className="ProfileContainer-profileTitle">{ photoUploadTitle } profile picture</h3>
              <UploadButton
                currentUser={ currentUser }
                addPhoto={ addPhoto }
               />
            </div>
            <form>
                <label className="ProfileContainer-cityTitle">Current city: {this.props.currentUser.city} </label>
                <input
                  id="ProfileContainer-profileFormInput"
                  className="form-input"
                  placeholder="enter your city..."
                  onChange={ this.update("city") }
                  value={ this.state.city }>

                </input>
              <button
                onClick={ this.handleAddCity }
                className="ProfileContainer-cityButton"
                type="submit">{ cityTitle } City</button>
            </form>

          </div>

        </section>
      )


  }
}

export default ProfileShow;
