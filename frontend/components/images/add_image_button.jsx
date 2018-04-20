import React from 'react';

class AddImageButton extends React.Component {

  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
    this.notLoggedIn = this.notLoggedIn.bind(this);
  }

  notLoggedIn() {
    let error = document.getElementById("image-upload-errors");
    error.className = "reveal-image-upload-error";
    window.setTimeout(() => {
      error.className = "hidden";
    }, 3000);
  }

  upload(e) {
    e.preventDefault();
    const { currentUser, apartmentShow, addImage } = this.props;
    if (!currentUser) {
      this.notLoggedIn();
      return;
    }
    cloudinary.openUploadWidget(window.cloudinary_options_no_crop, (error, images) => {
      if (error === null) {
        const photoParams = {image: {user_id: currentUser.id, apartment_id: apartmentShow.id, url: images[0].secure_url, thumbnail_url: images[0].thumbnail_url}};
        this.props.addImage(photoParams);
      };
    });
  }

  render() {
    return (
      <div className="image-button-background">
        <button className="add-image-button" onClick={this.upload}>add image</button>
        <div id="image-upload-errors" className="hidden">Please login to upload images!</div>
      </div>
    )
  }
}


export default AddImageButton;
