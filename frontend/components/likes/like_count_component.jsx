import React from "react";

const getLikeText = (count, isLiked) => {
  if (isLiked && count === 1) {
    return "You like this";
  } else if (isLiked && count === 2) {
    return `you and ${count} other`;
  } else if (isLiked && count > 2) {
    return `you and ${count - 1} others`;
  } else if (count === 1) {
    return `${count} like`;
  } else if (count > 1) {
    return `${count} likes`;
  } else {
    return "";
  }
};

const LikeCountComponenet = ({ count, isLiked }) => (
  <h4>{getLikeText(count, isLiked)}</h4>
);

export default LikeCountComponenet;
