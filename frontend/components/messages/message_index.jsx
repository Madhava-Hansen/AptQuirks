import React, {useState, useEffect} from "react";
import MessageIndexItem from "./message_index_item";
import MailNavigation from "./mail_navigation";
import {fetchConversation, createMessage} from '../../util/conversation_api_util';

const MessageIndex = props => {
  
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(['']);
  const [currentConversation, setCurrentConversation] = useState({})

  useEffect(() => {
    const conversationId = props.location.pathname.split("/").pop();
    fetchConversation(conversationId).then(conversation => {
      setMessages(conversation.messages);
      setCurrentConversation(conversation);
    })
  }, []) 

  const getReceiverUsername = () => {
    if (currentConversation && props.currentUser) {
      const {receiver_username, sender_username} = currentConversation;
      // figure out username for who currentUser is messaging to display at top of message index
      return props.currentUser.username === receiver_username ? sender_username : receiver_username;
    }
  }

  const handleMessageSend = e => {
    if (!currentMessage) {
      return;
    }
    e.preventDefault();
    const {currentUser} = props;
    const createMessageObject = {
      message: {
        read: false,
        user_id: currentUser.id,
        conversation_id: currentConversation.id,
        body: currentMessage
      }
    };
    createMessage(createMessageObject).then(message => {
      const newMessages = messages.slice(0);
      newMessages.push(message);
      setMessages(newMessages);
    })
    setCurrentMessage('');
  }

  const update = e => setCurrentMessage(e.target.value);

  const {currentUser, dispatch} = props;
  return (
    <section className="MessageIndexWrapper">
      <div className="MessageIndex">
          <MailNavigation 
            dispatch={dispatch} 
          />
          <div className="MessageIndex-receiverUsername">To: {getReceiverUsername()}</div>
          <ul className="MessageIndex-messages">
            {messages.map((message, idx) => {
              const nextIndex = idx + 1;
              const nextMessage = (messages[nextIndex] && messages[nextIndex].user_id) ? messages[nextIndex] : {};
              const showMeta = message.user_id !== nextMessage.user_id ? true : false;
              return (
              <MessageIndexItem
                message={message}
                currentUser={currentUser}
                key={message.id}
                receiverUsername={getReceiverUsername()}
                shouldShowMeta={showMeta}
              />
              )
            }
            )}
          </ul>
          <form className="MessageIndex-form">
            <input
              placeholder="enter message..."
              className="MessageIndex-formInput form-input"
              onChange={update}
              value={currentMessage}
            />
            <button
              className="MessageIndex-sendButton"
              type="submit"
              onClick={handleMessageSend}
            >
              send
            </button>
        </form>
        </div>
    </section>
  );
}

export default MessageIndex;
