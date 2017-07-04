import React from 'react';

const MessageIndexItem = ({ message, currentUser }) => {
  let classes = currentUser.id === message.user_id ?
   "current-user-message" : "other-user-message";
  return (
    <li className={classes}>
      {message.body}
    </li>
  )
}

export default MessageIndexItem;
