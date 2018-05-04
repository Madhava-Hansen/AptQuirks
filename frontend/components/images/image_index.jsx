import React from 'react';
import ImageIndexItem from './image_index_item';
import AddImageButton from './add_image_button';
import { withRouter } from 'react-router-dom';

class ImageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.slideshow = this.slideshow.bind(this);
    this.state = { slideshowClass: "hidden" };
  }

  slideshow() {
    if (this.state.slideshowClass ==="hidden") {
      this.setState({ slideshowClass: "image-slideshow"});
    } else {
      this.setState({ slideshowClass: "hidden"});
    }

  }

  componentWillMount() {
    let idsObject = { image: {apartment_id: null} };
    let aptId;
    if (this.props.apartmentId === undefined) {
      aptId = this.props.location.pathname.split('/').pop();
      idsObject.image.apartment_id = aptId;
    } else {
      idsObject.image.apartment_id = this.props.apartmentShow.id;
    }
    this.props.fetchImages(idsObject);
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
        <div className="image-header-container">
        <AddImageButton
          addImage={ addImage }
          apartmentShow={ apartmentShow }
          currentUser={ currentUser }
         />
           <div onClick={ this.slideshow } className="slideshow"> view slideshow</div>
         </div>
        <section className="image-index">
          { images }
        </section>
        <div className={ this.state.slideshowClass }>
          <p onClick={ this.slideshow } className="close-image">x</p>
          <img className="current-slideshow-image" src={ "https://res.cloudinary.com/aptquirks/image/upload/v1524247265/pjbxpk4klymgp9enjkia.jpg" } alt="img"></img>
        </div>
      </div>
    )

  }
}

export default withRouter(ImageIndex);
