import React from 'react';

const QuirkIndexItem = ({ quirk, deleteQuirk, userId }) => {
  const quirkIds = {id: quirk.id, apartment_id: quirk.apartment_id };
  let classes = "group quirk-index-item";
  let quirkDeleteClass = userId === quirk.id ? "quirk-button" : "hidden";
  return (
    <aside className={classes}>
      <li>
        <section className="quirk-user-info">
        <figure className="quirk-pic">
          <img className="quirk-pic" src={quirk.user_pic}></img>
        </figure>
        <p className="quirk-username">{quirk.user_name}</p>
        <p className="timestamp">{quirk.created_at} ago</p>
        </section>
        <section className="quirk-main-content">
        <h4 className="quirk-title">{quirk.title}</h4>
        <p className="quirk-body">{quirk.body}</p>
        <button className="quirk-button" onClick={() => deleteQuirk(quirkIds)}>Delete</button>
        <div className="divider"></div>
        </section>
      </li>
    </aside>
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
// 
