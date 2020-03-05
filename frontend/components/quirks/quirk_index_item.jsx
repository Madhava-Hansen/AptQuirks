import React from 'react';

export const QuirkIndexItem = ({
  quirk: {
    user_name, 
    user_pic, 
    title, 
    apt_number, 
    body,
    created_at
  }}) => {
  let classes = "group quirk-index-item";
  return (
    <li className={classes}>
      <section className="quirk-user-info">
        <figure className="quirk-pic">
          <img className="quirk-pic" src={user_pic}></img>
        </figure>
        <p className="quirk-username">{user_name}</p>
        <p className="timestamp">{created_at} ago</p>
      </section>
        <section className="quirk-main-content">
          <div className="group">
            <h4 className="quirk-title">{title}</h4>
            <p className="apartment-number">Apt {apt_number}</p>
          </div>
          <p className="quirk-body">{body}</p>
          <div className="divider"></div>
      </section>
    </li>
  )
}

