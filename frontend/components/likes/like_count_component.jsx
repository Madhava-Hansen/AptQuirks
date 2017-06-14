import React from 'react';

const singleLike = (count, likeStatus) => {
  if (likeStatus && count === 1) {
    return (
      <h5>you like this</h5>
    )
  } else if (likeStatus) {
      return (
          <h5>you and {count - 1} other</h5>
      )
  } else {
    return (
      <h5>
        {count} like
      </h5>
    )
  }
};

const multipleLikes = (count, likeStatus) => {
  if (count === 0) {
    return (
      <h5></h5>
    )
  }
  if (likeStatus && count === 2) {
    return (
        <h5>you and {count - 1} other</h5>
    )
  } else if (likeStatus && count > 2) {
    return (
        <h5>you and {count - 1} others</h5>
    )
  } else {
    return (
      <h5>{count} likes</h5>
    )
  }
};

const LikeCountComponenet = ({ count, likeStatus }) => (
  count === 1 ? singleLike(count, likeStatus) : multipleLikes(count, likeStatus)
);

export default LikeCountComponenet;
