import React from 'react';

const UserSearchIndexItem = ({ user, handleUserSelection }) => {
  return (
    <li
      className="UserSearchIndexItem"
      onClick={() => handleUserSelection(user)}>
      {user.username}
    </li>
  )
  }


export default UserSearchIndexItem;
