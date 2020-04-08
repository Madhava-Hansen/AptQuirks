import React from "react";
import UploadButton from "./upload_button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEdit } from '@fortawesome/fontawesome-free-solid'

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: "", inEditMode: false };
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

  handleToggleEditMode = () => this.setState({isInEditMode: !isInEditMode});

  update = city => {
    return (e) =>
      this.setState({
        [city]: e.currentTarget.value,
      });
  };

  render() {
    const { addPhoto, currentUser } = this.props;
    const cityTitle = currentUser.city ? "Update" : "Add";
    const picturePath =
      currentUser.thumbnail_url ||
      "https://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png";
    return (
      <section className="UserProfile">
          <div className="UserProfile-userGreeting">
            <h1>
              Hi there, {currentUser.username}!
            </h1>
            <FontAwesomeIcon 
              className="UserProfile-editIcon"
              size="1x" 
              icon={faEdit} 
            />
          </div>
          <div className="UserProfile-mainContentWrapper">
          <div className="UserProfile-heading">
            <div>
            <figure className="UserProfile-pic">
              <img src={picturePath} alt="profile picture"></img>
            </figure>
            <div className="photo-upload">
            <h3 className="UserProfile-title">
            </h3>
            <UploadButton 
              buttonName={"change photo"} 
              currentUser={currentUser} 
              addPhoto={addPhoto} 
              class="UserProfile-imageUploadButton"
            />
          </div>
          </div>
          </div>
          <div className="UserProfile-cityTitleWrapper">
            <label className="UserProfile-cityTitle">
              Current city: {this.props.currentUser.city}{" "}
            </label>
            <input
              className="UserProfile-formInput"
              placeholder="enter your city..."
              onChange={this.update("city")}
              value={this.state.city}
            ></input>
            <button
              className="UserProfile-cityButton"
              onClick={this.handleAddCity}
            >
              {cityTitle} City
            </button>
          </div>
          </div>
      </section>
    );
  }
}

export default ProfileShow;
