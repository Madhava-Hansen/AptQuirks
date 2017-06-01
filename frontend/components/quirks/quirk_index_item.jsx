import React from 'react';

const QuirkIndexItem = ({ quirk, deleteQuirk, userId }) => {
  const quirkIds = {id: quirk.id, apartment_id: quirk.apartment_id };
  return (
    <div>
      <li>
        <h1>{quirk.title}</h1>
        <p>{quirk.body}</p>
        <p>by {quirk.user_name}</p>
        <p>{quirk.created_at} ago</p>
        <button onClick={() => deleteQuirk(quirkIds)}>Delete Quirk</button>
      </li>

    </div>
  )

}

export default QuirkIndexItem;







// let timeStamp;
// let key;
// if (date.days === 0) {
//   key = null;
//   timeStamp = "today";
// } else if (date.days === 1) {
//   key = "days";
//   timeStamp = "day ago"
// } else if (date.days) {
//   key = "days";
//   timeStamp = "days ago";
// } else {
//   key = "months";
//   timeStamp = "months ago"
// }
// debugger;
