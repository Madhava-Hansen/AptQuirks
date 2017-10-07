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

  componentWillMount() {
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
              <h3 className="picture-title">{ photoUploadTitle } profile picture</h3>
              <UploadButton
                currentUser={currentUser}
                addPhoto={addPhoto}
               />
            </div>

            <br/>
            <form>
                <label className="city-title">City: {this.props.currentUser.city} </label>
                <input
                  className="form-input"
                  onChange={this.update("city")}
                  value={this.state.city}>

                </input>
              <button
                id="city-button"
                onClick={this.handleAddCity}
                className="button"
                type="submit">{cityTitle} City</button>
            </form>

          </div>

        </section>
      )


  }
}

export default ProfileShow;
