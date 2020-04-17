import React from "react";
import ImageIndexItem from "./image_index_item";
import AddImageButton from "./add_image_button";
import { withRouter } from "react-router-dom";

class ImageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.scrollStatus = "";
    this.imageIdx = "";
    this.state = {
      slideshowClass: "hidden",
      slideshowIndex: 0,
      noImageClass: "hidden",
    };
  }

  componentDidMount() {
    this.props.fetchImages(
      this.props.apartmentId || sessionStorage.getItem("apartmentId")
    );
  }

  componentWillUnmount() {
    $("body").removeClass("toggle-scroll");
    this.scrollStatus = "";
  }

  toggleSlideshow = e => {
    if (!this.props.imageIndex[0]) {
      this.toggleImageError();
      window.setTimeout(() => {
        this.toggleImageError();
      }, 3000);
      return;
    }
    window.scroll(0, 0);
    this.setImageURL(e);
    this.toggleScroll();
    if (this.state.slideshowClass === "hidden") {
      this.setState({ slideshowClass: "image-slideshow" });
    } else {
      this.setState({ slideshowClass: "hidden" });
    }
  };

  toggleImageError = () => {
    if (this.state.noImageClass === "hidden") {
      this.setState({ noImageClass: "no-image-error" });
    } else {
      this.setState({ noImageClass: "hidden" });
    }
  };

  setImageURL = (e) => {
    if (e.target.id === "close-image") {
      return;
    }
    let { imageIndex } = this.props;
    if (e.target.classList.value === "slideshow") {
      if (this.state.slideshowIndex !== 0) {
        this.setState({ slideshowIndex: 0 });
      }
    } else {
      imageIndex.forEach((image, idx) => {
        if (image.url === e.target.src) {
          this.setState({ slideshowIndex: idx });
        }
      });
    }
  };

  toggleScroll = () => {
    if (this.scrollStatus === "toggle-scroll") {
      $("body").removeClass("toggle-scroll");
      this.scrollStatus = "";
    } else {
      $("body").addClass("toggle-scroll");
      this.scrollStatus = "toggle-scroll";
    }
  };

  slideshowLeft = () => {
    if (this.props.imageIndex.length <= 1) {
      return;
    }
    let index = this.state.slideshowIndex;
    let length = this.props.imageIndex.length - 1;
    if (this.state.slideshowIndex > 0) {
      index -= 1;
    } else {
      index++;
    }

    this.setState({ slideshowIndex: index });
  };

  slideshowRight = () => {
    if (this.props.imageIndex.length <= 1) {
      return;
    }
    let index = this.state.slideshowIndex;
    let length = this.props.imageIndex.length - 1;
    if (this.state.slideshowIndex >= length) {
      index = 0;
    } else {
      index++;
    }

    this.setState({ slideshowIndex: index });
  };

  render() {
    const { imageIndex, addImage, apartmentShow, currentUser } = this.props;
    let images;
    if (imageIndex) {
      images = imageIndex.map((image, idx) => {
        return (
          <ImageIndexItem
            image={image}
            toggleSlideshow={this.toggleSlideshow}
            key={idx}
            id={idx}
          />
        );
      });
    } else {
      images = [];
    }
    if (!imageIndex) {
      return <div></div>;
    } else {
      return (
        <div className="image-index-container">
          <div className="image-header-container">
            <AddImageButton
              addImage={addImage}
              apartmentShow={apartmentShow}
              currentUser={currentUser}
            />
            <div onClick={this.toggleSlideshow} className="slideshow">
              view slideshow
            </div>
            <p className={this.state.noImageClass}>No images to display</p>
          </div>
          <section className="image-index">{images}</section>
          <div className={this.state.slideshowClass}>
            <div className="current-slideshow-image">
              <p
                onClick={this.toggleSlideshow}
                id="close-image"
                className="close-image"
              >
                x
              </p>
              <img
                src={
                  imageIndex[0] ? imageIndex[this.state.slideshowIndex].url : ""
                }
                alt="img"
              ></img>
              <p onClick={this.slideshowLeft} className="slideshow-left">
                left
              </p>
              <p onClick={this.slideshowRight} className="slideshow-right">
                right
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(ImageIndex);
