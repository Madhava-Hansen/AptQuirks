import React from 'react';
import { withRouter } from 'react-router-dom';
import ConversationIndexItem from './conversation_index_item';
import {receiveConversation } from '../../actions/conversation_actions';
import MessageNav from './message_nav';

class ConversationIndex extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToNewMessage = this.redirectToNewMessage.bind(this);
    this.fetchMessages = this.fetchMessages.bind(this);
  }

  componentDidMount() {
    this.props.fetchConversations();
  }

  redirectToNewMessage() {
    this.props.history.push("/message/new");
  }

  fetchMessages(conversation) {
    const {dispatch, fetchMessages, history} = this.props;
    dispatch(receiveConversation(conversation));
    const fetchMessagesObject = {message: { conversation_id: conversation.id }};
    fetchMessages(fetchMessagesObject);
    history.push(`/messages/${conversation.id}`);
  }

  render() {
    const {conversationsIndex, currentUser, dispatch} = this.props;
    let classes = "group message-container";
    let conversationsIndexRender;
    if (conversationsIndex.conversations) {
      conversationsIndexRender = conversationsIndex.conversations.map((conversation, idx) => {
			return (
				<ConversationIndexItem
					conversation={conversation}
					fetchMessages={() => this.fetchMessages(conversation)}
					currentUser={currentUser}
					key={idx}
				/>
			)
      })
    }
    return (
      <div className={classes}>
        <MessageNav
          dispatch={dispatch}
          />
        <ul className="conversation-index-list">
          {conversationsIndexRender}
        </ul>
      </div>
    )
  }
}

export default withRouter(ConversationIndex);
