import React from 'react';
import { connect } from 'react-redux';
import MessageIndex from './message_index';
import { createConversation, fetchConversation } from '../../actions/conversation_actions';
import { createMessage, fetchMessages } from '../../actions/message_actions';


const mapStateToProps = ({ session, messagesIndex, conversationsIndex }) => {
  return {
    currentUser: session.currentUser,
    messagesIndex: messagesIndex,
    currentConversation: conversationsIndex.currentConversation
  }
};

const mapDispatchToProps = dispatch => ({
  createMessage: ids => dispatch(createMessage(ids)),
  fetchMessages: conversationId => dispatch(fetchMessages(conversationId)),
  fetchConversation: id => dispatch(fetchConversation(id))
});

const MessageIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageIndex);

export default MessageIndexContainer;
