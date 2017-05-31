import React from 'react';

const QuirkIndexItem = ({ quirk }) => (
  <div>
    <li>
      <h1>{quirk.title}</h1>
      <p>{quirk.body}</p>
      <p>{quirk.created_at}</p>
      <p>by {quirk.user_name}</p>
    </li>

  </div>
)

export default QuirkIndexItem;
