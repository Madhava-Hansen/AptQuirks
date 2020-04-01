import React from "react";

export const QuirkIndexItem = ({
  quirk: { user_name, user_pic, title, apt_number, body, created_at },
}) => {
  return (
    <li className="QuirkIndexItem">
      <section className="QuirkIndexItem-userInfo">
        <img className="QuirkIndexItem-userPic" src={user_pic}></img>
        <p className="QuirkIndexItem-username">{user_name}</p>
        <p className="QuirkIndexItem-timestamp">{created_at} ago</p>
      </section>
      <section className="QuirkIndexItem-mainContent">
        <h4 className="QuirkIndexItem-titleText">{title}</h4>
        <p className="QuirkIndexItem-apartmentNumber">Apt {apt_number}</p>
        <p className="QuirkIndexItem-bodyText">{body}</p>
      </section>
    </li>
  );
};
