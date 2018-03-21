import React from 'react';
import { connect } from 'react-redux';
import ConversationIndex from './conversation_index';
import { fetchConversations } from '../../actions/conversation_actions';
import { fetchMessages } from '../../actions/message_actions';



const mapStateToProps = ({ conversationsIndex, messages, session }) => {
  return {
    conversationsIndex: conversationsIndex,
    newConversation: conversationsIndex.newConversation,
    currentUser: session.currentUser,
    dispatch: store.dispatch
  }

};

const mapDispatchToProps = dispatch => ({
  fetchConversations: id => dispatch(fetchConversations(id)),
  fetchMessages: id => dispatch(fetchMessages(id))
});

const ConversationIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationIndex);

export default ConversationIndexContainer;
