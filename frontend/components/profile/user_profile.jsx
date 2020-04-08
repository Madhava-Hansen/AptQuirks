import React from "react";
import UploadButton from "./upload_button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEdit, faTimesCircle } from '@fortawesome/fontawesome-free-solid'

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: "", inEditMode: false };
    this.defaultUserImage =  "https://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png";
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleAddCity = e => {
    const user = {
      user: { id: this.props.currentUser.id, city: this.state.city },
    };
    this.props.updateUser(user).then(this.setState({ city: "" }));
  };

  handleToggleEditMode = () => this.setState({inEditMode: !this.state.inEditMode});

  update = city => {
    return (e) =>
      this.setState({
        [city]: e.currentTarget.value,
      });
  };

  render() {
    const {addPhoto, currentUser} = this.props;
    const {inEditMode, city} = this.state;
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
          <div className="UserProfile-userInfoItem">
            <div className="UserProfile-title">Username:</div>
            <p className="UserProfile-info">{currentUser.username}</p>
          </div>
          <div className="UserProfile-userInfoItem">
            <div className="UserProfile-title">City:</div>
            <p className="UserProfile-info">
              {currentUser.city}
            </p>
            {inEditMode && (
            <div className="UserProfile-editCityWrapper">
              <input
                className="UserProfile-formInput"
                placeholder="enter your city..."
                onChange={this.update("city")}
                value={city}
              ></input>
              <button
                className="UserProfile-cityButton"
                onClick={this.handleAddCity}
              >
                {currentUser.city ? "Update" : "Add"} City
              </button>
            </div>
            )}

          </div>
          </div>
      </section>
    );
  }
}

export default ProfileShow;
