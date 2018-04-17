import React from 'react';

const ImageIndexItem = (image, id) => {
  return (
    <div className="image-index-item">
      <img src={ image.image["thumbnail_url"] } alt="img"></img>
    </div>
  )
}

export default ImageIndexItem;
