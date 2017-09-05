import React from 'react';
import { withRouter } from 'react-router-dom';
import NewMessage from './new_message';
import ConversationIndexItem from './conversation_index_item';
import MessageIndexContainer from './message_index_container'
import { RECEIVE_CONVERSATION, receiveConversation } from '../../actions/conversation_actions';
import MessageNav from './message_nav';
import { Link } from 'react-router-dom';

class ConversationIndex extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToNewMessage = this.redirectToNewMessage.bind(this);
    this.fetchMessages = this.fetchMessages.bind(this);
  }

  componentWillMount() {
    this.props.fetchConversations();
  }

  redirectToNewMessage() {
    this.props.history.push("/message/new");
  }

  fetchMessages(conversation) {
    let { dispatch } = this.props;
    dispatch(receiveConversation(conversation));
    const fetchMessagesObject = {message: { conversation_id: conversation.id }};
    this.props.fetchMessages(fetchMessagesObject);
    this.props.history.push(`/messages/${conversation.id}`);
  }

  render() {
    const { conversations, fetchMessages, currentConversation, currentUser } = this.props;
    let classes = "group message-container";
    let conversationsArray;
    let conversationsIndex;
    if (conversations) {
      conversationsArray = Object.keys(conversations).map(key => conversations[key]);
      conversationsIndex = conversationsArray.map((conversation, idx) => {
        return (
          <ConversationIndexItem
            conversation={conversation}
            fetchMessages={() => this.fetchMessages(conversation)}
            currentUser={currentUser}
            key={idx}
          />
        )
      })
        return (
          <div className={classes}>
            <MessageNav />
            <ul className="conversation-index-list">
              {conversationsIndex}
            </ul>
          </div>
        )
    }
  }
}

export default withRouter(ConversationIndex);
