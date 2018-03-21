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
    this.conversationsIndex = null;
  }

  componentWillMount() {
    this.props.fetchConversations();
  }

  redirectToNewMessage() {
    this.props.history.push("/message/new");
  }

  componentWillReceiveProps(nextProps) {
    const { conversations, fetchMessages, currentUser } = nextProps;
    let classes = "group message-container";
    let conversationsArray;
      conversationsArray = Object.keys(conversations).map(key => conversations[key]);
      this.conversationsIndex = conversationsArray.map((conversation, idx) => {
        return (
          <ConversationIndexItem
            conversation={ conversation }
            fetchMessages={ () => this.fetchMessages(conversation) }
            currentUser={ currentUser }
            key={ idx }
          />
        )
      })
  }

  fetchMessages(conversation) {
    let { dispatch } = this.props;
    dispatch(receiveConversation(conversation));
    const fetchMessagesObject = {message: { conversation_id: conversation.id }};
    this.props.fetchMessages(fetchMessagesObject);
    this.props.history.push(`/messages/${conversation.id}`);
  }

  render() {
    const { dispatch } = this.props;
    let classes = "group message-container";
        return (
          <div className={ classes }>
            <MessageNav
              dispatch={ dispatch }
             />
            <ul className="conversation-index-list">
              { this.conversationsIndex }
            </ul>
          </div>
        )
    // }
  }
}

export default withRouter(ConversationIndex);
