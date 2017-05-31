import React from 'react';

const singleLike = (count) => (
  <h5>{count} like</h5>
);

const multipleLikes = (count) => (
  <h5>{count} likes</h5>
);

const LikeCountComponenet = ({ count }) => (
  count === 1 ? singleLike(count) : multipleLikes(count)
);

export default LikeCountComponenet;
