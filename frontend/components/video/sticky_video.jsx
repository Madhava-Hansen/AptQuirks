import React, { useEffect, useState } from "react";

export const StickyVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowVideo(true);
    }, 4000);
  }, []);

  return (
    <>
      {showVideo && (
        <div className={`${showVideo ? "StickyVideo fadeIn" : "StickyVideo"}`}>
          <video
            className="StickyVideo-video"
            src="https://res.cloudinary.com/aptquirks/video/upload/v1600714338/Apartment_Quirks_q5sgsy.mp4"
            controls
          >
            Your browser does not support video.
          </video>
        </div>
      )}
    </>
  );
};
