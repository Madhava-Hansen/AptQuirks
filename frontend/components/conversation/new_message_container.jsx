import React from 'react';
import { connect } from 'react-redux';
import NewMessage from './new_message';
import { createConversation } from '../../actions/conversation_actions';
import { createMessage, fetchUsers } from '../../actions/message_actions';


const mapStateToProps = ({ session, messagesIndex, conversationsIndex }) => {
  return {
    currentUser: session.currentUser,
    users: messagesIndex.users,
    messages: messagesIndex,
    conversationsIndex: conversationsIndex
  }

};

const mapDispatchToProps = dispatch => ({
  createConversation: ids => dispatch(createConversation(ids)),
  fetchUsers: userName => dispatch(fetchUsers(userName)),
  createMessage: ids => dispatch(createMessage(ids)),
  fetchMessages: conversationId => dispatch(fetchMessages(conversationId)),
  dispatch
});

const NewMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessage);

export default NewMessageContainer;