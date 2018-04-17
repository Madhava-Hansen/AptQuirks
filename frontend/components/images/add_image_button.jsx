import React from 'react';

class AddImageButton extends React.Component {

  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();
    const { currentUser, apartmentShow } = this.props;
    cloudinary.openUploadWidget(window.cloudinary_options, (error, images) => {
      if (error === null) {
        const photoParams = {image: {user_id: currentUser.id, apartment_id: apartmentShow, url: images[0].url, thumbnail_url: images[0].thumbnail_url}};
        this.props.addImage(photoParams);
      };
    });
  }

  render() {
    return (
      <button className="add-image-button" onClick={this.upload}>add image</button>
    )
  }
}


export default AddImageButton;