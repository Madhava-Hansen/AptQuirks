import React from "react";
import {getDateStringFromTimestamp} from '../../util/utilities';

const InboxItem = ({
  conversation,
  redirectToMessages,
  currentUser,
}) => {
  let username =
    currentUser.username === conversation.receiver_username
      ? conversation.sender_username
      : conversation.receiver_username;
  const mostRecentMessage = conversation.messages[conversation.messages.length - 1];
  return (
    <li className="InboxItem" onClick={() => redirectToMessages(conversation.id)}>
      <div className="InboxItem-mainContentWrapper">
        <img
          className="InboxItem-userImage"
          src={conversation.receiver_image_url}>
        </img>
        <p className="InboxItem-username">{`${username.slice(0, 12)}${username.length >= 12 ? '.' : ''}`}</p>
        <p className="InboxItem-mostRecentMessage">{mostRecentMessage.body}</p>
      </div>
      <p className="InboxItem-date">{getDateStringFromTimestamp(mostRecentMessage.updated_at)}</p>
    </li>
  );
};

export default InboxItem;
