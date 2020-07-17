import React from "react";

const ImageIndexItem = ({ image, toggleSlideshow, id }) => {
  return (
    <div 
      onClick={toggleSlideshow}
      className="image-index-item"
      id={id}
      style={{
        backgroundImage: `url(${image.url})`, 
        backgroundPosition: 'cover', 
        backgroundSize: 'cover'
      }}>
    </div>
  );
};

export default ImageIndexItem;
