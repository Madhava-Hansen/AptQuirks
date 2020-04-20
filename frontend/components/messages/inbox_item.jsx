import React from "react";
import {getDateStringFromTimestamp} from '../../util/utilities';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faAngleRight} from '@fortawesome/fontawesome-free-solid'

const InboxItem = ({
  conversation,
  currentUser,
  redirectToMessagesIndex,
  deleteConversation
}) => {
  const username =
    currentUser.username === conversation.receiver_username
      ? conversation.sender_username
      : conversation.receiver_username;
  const mostRecentMessage = conversation.messages[conversation.messages.length - 1];
  return (
    <li className="InboxItem">
      <div 
        onClick={() => redirectToMessagesIndex(conversation.id)} 
        className="InboxItem-mainContentWrapper">
        <img
          className="InboxItem-userImage"
          src={conversation.receiver_image_url}>
        </img>
        <p className="InboxItem-username">{`${username.slice(0, 12)}${username.length >= 12 ? '.' : ''}`}</p>
        <p className="InboxItem-mostRecentMessage">{mostRecentMessage ? mostRecentMessage.body : ''}</p>
      </div>
      <div
        onClick={() => deleteConversation(conversation)}
        className="InboxItem-iconsWrapper">
        <FontAwesomeIcon 
          size="1x"
          icon={faTrash}
          className="InboxItem-trashIcon"
          disabled={true}
        />
        <FontAwesomeIcon 
          size="lg"
          icon={faAngleRight}
          className="InboxItem-linkIcon InboxItem-linkIconHoverTrigger"
          disabled={true}
        />
      </div>
      <p className="InboxItem-date">{mostRecentMessage && getDateStringFromTimestamp(mostRecentMessage.updated_at)}</p>
    </li>
  );
};

export default InboxItem;
