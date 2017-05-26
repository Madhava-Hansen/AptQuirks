import React from 'react';

const QuirkIndexItem = ({ quirk }) => (
  <div>
    <li>
      <h1>{quirk.title}</h1>
      <p>{quirk.body}</p>
    </li>

  </div>
)

export default QuirkIndexItem;
