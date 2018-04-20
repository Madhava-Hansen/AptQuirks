import React from 'react';
import ImageIndexItem from './image_index_item';
import AddImageButton from './add_image_button';
import { withRouter } from 'react-router-dom';

class ImageIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.apartmentId === undefined) {
      const aptId = this.props.location.pathname.split('/').pop();
      const idsObject = {image: {apartment_id: aptId }};
      this.props.fetchImages(idsObject);
    } else {
      this.props.fetchImages(this.props.apartmentShow.id);
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const { imageIndex, addImage, currentUser, apartmentShow } = this.props;
    let images;
    if (imageIndex) {
      images = imageIndex.map((image, idx) => {
        return (
          <ImageIndexItem
            image={ image }
            key={ idx }
           />
        )
      })
    } else {
      images = [];
    }

    return (
      <div className="image-index-container">
        <AddImageButton
          addImage={ addImage }
          apartmentShow={ apartmentShow }
          currentUser={ currentUser }
         />
        <section className="image-index">
          { images }
        </section>

      </div>
    )

  }
}

export default withRouter(ImageIndex);
