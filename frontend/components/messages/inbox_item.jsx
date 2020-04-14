import React from "react";

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
  const updatedAt = mostRecentMessage.updated_at;
  const date = new Date(updatedAt);
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
      <p className="InboxItem-date">{date.toLocaleDateString()}</p>
    </li>
  );
};

export default InboxItem;
