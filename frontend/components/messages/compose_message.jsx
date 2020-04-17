import React, {useState} from "react";
import {ComposeMessageUsersIndex} from "./componse_message_users_index";
import MailNavigation from "./mail_navigation";
import {fetchUsers} from '../../util/conversation_api_util';

const ComposeMessage = props => {

  const [users, setUsers] = useState([]);

  const update = e => fetchUsers({user: {username: e.target.value}}).then(users => setUsers(users));

  const handleUserSelection = user => {
    const { currentUser, createConversation } = props;
    const url = user.thumbnail_url
      ? user.thumbnail_url
      : "https://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png";
    const createConversationObject = {
      conversation: {
        receiver_id: user.id,
        sender_id: currentUser.id,
        receiver_username: user.username,
        sender_username: currentUser.username,
        receiver_image_url: url,
      },
    };

    createConversation(createConversationObject).then(
      conversationObj => props.history.push(`/messages/${conversationObj.conversation.id}`));
  }

  return (
    <section className="NewMessageWrapper">
      <div className="message-container">
        <MailNavigation dispatch={props.dispatch} />
        <ComposeMessageUsersIndex
          users={users}
          handleUserSelection={handleUserSelection}
          update={update}
        />
      </div>
    </section>
  );
}

export default ComposeMessage;
