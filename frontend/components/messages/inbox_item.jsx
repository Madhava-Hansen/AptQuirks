import React from "react";

const InboxItem = ({
  conversation,
  fetchMessages,
  currentUser,
}) => {
  let username =
    currentUser.username === conversation.receiver_username
      ? conversation.sender_username
      : conversation.receiver_username;
  return (
    <li className="conversation-index-item" onClick={fetchMessages}>
      <input
      className="InboxItem-checkbox"
        type="checkbox"
      ></input>
      <img
        className="conversation-index-image"
        src={conversation.receiver_image_url}
      ></img>
      <p className="conversation-index-username">{username}</p>
    </li>
  );
};

export default InboxItem;
