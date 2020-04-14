import React from "react";
import {getDateStringFromTimestamp} from '../../util/utilities';

const MessageIndexItem = ({message, currentUser}) => {
  const isCurrentUsersMessage = currentUser.id === message.user_id;
  const classes = isCurrentUsersMessage
      ? "MessageIndexItem-senderMessage"
      : "MessageIndexItem-receiverMessage";
    const createdAtSenderClass = isCurrentUsersMessage ? "MessageIndexItem-createdAtSender" : "";
  return (
    <div>
      <li className={classes}>{message.body}</li>
      <p className={`MessageIndexItem-createdAt ${createdAtSenderClass}`}>{getDateStringFromTimestamp(message.created_at)}</p>
    </div>
  );
};

export default MessageIndexItem;
