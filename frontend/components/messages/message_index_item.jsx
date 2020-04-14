import React from "react";
import {getDateStringFromTimestamp} from '../../util/utilities';

const MessageIndexItem = ({message, currentUser, receiverUsername, shouldShowMeta}) => {
  const isCurrentUsersMessage = currentUser.id === message.user_id;
  const wrapperClasses = isCurrentUsersMessage
      ? "MessageIndexItem-senderMessage"
      : "MessageIndexItem-receiverMessage";
      const metaWrapperClasses = isCurrentUsersMessage
      ? "MessageIndexItem-senderMeta"
      : "MessageIndexItem-receiverMeta";
  return (
    <div className="MessageIndexItem">
        <li className={wrapperClasses}>{message.body}</li>
        {shouldShowMeta && (
          <div className={`MessageIndexItem-messageMeta ${metaWrapperClasses}`}>
            <p className="MessageIndexItem-from">{isCurrentUsersMessage ? 'From You:' : `From ${receiverUsername}:`}</p>
            <p>{getDateStringFromTimestamp(message.created_at)}</p>
          </div>
        )}
    </div>
  );
};

export default MessageIndexItem;
