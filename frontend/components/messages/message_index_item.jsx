import React from "react";

const MessageIndexItem = ({ message, currentUser }) => {
  const classes = currentUser.id === message.user_id
      ? "MessageIndexItem-senderMessage current-user-message"
      : "MessageIndexItem-receiverMessage other-user-message";
  return <li className={classes}>{message.body}</li>;
};

export default MessageIndexItem;
