import React from 'react';
import { connect } from 'react-redux';
import ConversationIndex from './conversation_index';
import { fetchConversations } from '../../actions/conversation_actions';

const mapStateToProps = ({ conversationsIndex, messages, session }) => ({
  conversationsIndex: conversationsIndex,
  newConversation: conversationsIndex.newConversation,
  messages: messages,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchConversations: id => dispatch(fetchConversations(id))
});

const ConversationIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationIndex);

export default ConversationIndexContainer;
