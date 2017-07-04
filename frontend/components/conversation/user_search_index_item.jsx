import React from 'react';

const UserSearchIndexItem = ({ user, handleUserSelection }) => {
  return (
    <li
      className="user-search-index-item"
      onClick={() => handleUserSelection(user)}>
      {user.username}
    </li>
  )
  }


export default UserSearchIndexItem;
