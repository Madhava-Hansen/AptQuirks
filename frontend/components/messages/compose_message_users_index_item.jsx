import React from "react";

export const ComposeMessageUsersIndexItem = ({user, handleUserSelection}) => 
  <li
    className="UserSearchIndexItem"
    onClick={() => handleUserSelection(user)}>
    {user.username}
  </li>