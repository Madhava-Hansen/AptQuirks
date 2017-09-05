import React from 'react';

const QuirkIndexItem = ({ that, quirk, deleteQuirk, currentUser }) => {
  const quirkIds = {id: quirk.id, apartment_id: quirk.apartment_id };
  let classes = "group quirk-index-item";
  let quirkDeleteClass;
  if (currentUser === undefined) {
    quirkDeleteClass = "hidden";;
  } else {
    quirkDeleteClass = "quirk-button"
  }
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
        <div className="group">
        <h4 className="quirk-title">{quirk.title}</h4>
        <p className="apartment-number">- apt {quirk.apt_number}</p>
        </div>
        <p className="quirk-body">{quirk.body}</p>
        <button className={quirkDeleteClass} onClick={() => deleteQuirk(quirkIds, that)}>Delete</button>
        <div className="divider"></div>
        </section>
      </li>
    </aside>
  )

}

export default QuirkIndexItem;
