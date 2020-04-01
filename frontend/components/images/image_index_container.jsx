import React from "react";
import { connect } from "react-redux";
import ImageIndex from "./image_index";
import { addImage, fetchImages } from "../../actions/image_actions";

const mapStateToProps = ({ images, apartmentShow, session }) => {
  return {
    imageIndex: images.imageIndex,
    apartmentShow: apartmentShow,
    currentUser: session.currentUser,
    apartmentId: apartmentShow.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addImage: (image) => dispatch(addImage(image)),
    fetchImages: (apartmentId) => dispatch(fetchImages(apartmentId)),
  };
};

const ImageIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageIndex);

export default ImageIndexContainer;
