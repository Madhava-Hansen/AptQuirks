import React from 'react';

const ImageIndexItem = ({ image, toggleSlideshow, id }) => {
  return (
    <div id={ id } onClick={ toggleSlideshow } className="image-index-item">
      <img src={ image.url } alt="img"></img>
    </div>
  )
}

export default ImageIndexItem;
