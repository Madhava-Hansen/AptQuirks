import React from 'react';

class UploadButton extends React.Component {

  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();
    const { currentUser } = this.props;
    cloudinary.openUploadWidget(window.cloudinary_options, (error, images) => {
      if (error === null) {
        const photoParams = { user: { id: currentUser.id, url: images[0].secure_url, thumbnail_url: images[0].thumbnail_url } };
        this.props.addPhoto(photoParams);
      };
    });
  }

  render() {
    return (
      <button onClick={this.upload}>Upload</button>
    )
  }
}


export default UploadButton;
