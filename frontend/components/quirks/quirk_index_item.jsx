import React from 'react';

const QuirkIndexItem = ({ quirk, date }) => {
  let timeStamp;
  let key;
  if (date.days === 0) {
    key = null;
    timeStamp = "today";
  } else if (date.days === 1) {
    key = "days";
    timeStamp = "day ago"
  } else if (date.days) {
    key = "days";
    timeStamp = "days ago";
  } else {
    key = "months";
    timeStamp = "months ago"
  }

  return (
    <div>
      <li>
        <h1>{quirk.title}</h1>
        <p>{quirk.body}</p>
        <p>by {quirk.user_name}</p>
        <p>{date[key]} {timeStamp}</p>
      </li>

    </div>
  )

}

export default QuirkIndexItem;
