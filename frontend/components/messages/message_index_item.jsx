import React from "react";

const MessageIndexItem = ({message, currentUser}) => {
  const classes = currentUser.id === message.user_id
      ? "MessageIndexItem-senderMessage"
      : "MessageIndexItem-receiverMessage";
  return <li className={classes}>{message.body}</li>;
};

export default MessageIndexItem;
