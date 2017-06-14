import React from 'react';
import { connect } from 'react-redux';
import ConversationIndex from './conversation';

const mapStateToProps = ({ conversations, messages }) => ({

});

const mapDispatchToProps = dispatch => ({

});

const ConversationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationIndex);

export default ConversationContainer;
