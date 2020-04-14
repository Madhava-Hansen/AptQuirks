import React from "react";

const UserSearchIndexItem = ({user, handleUserSelection}) => 
  <li
    className="UserSearchIndexItem"
    onClick={() => handleUserSelection(user)}>
    {user.username}
  </li>

export default UserSearchIndexItem;
