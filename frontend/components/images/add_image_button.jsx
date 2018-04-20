import React from 'react';

class AddImageButton extends React.Component {

  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();
    const { currentUser, apartmentShow, addImage } = this.props;
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
      </div>
    )
  }
}


export default AddImageButton;
