import {connect} from "react-redux";
import MessageIndex from "./message_index";
import {fetchConversation} from "../../actions/conversation_actions";
import {createMessage, fetchMessages} from "../../actions/message_actions";

const mapStateToProps = ({session, messagesIndex, conversationsIndex}) => ({
  currentUser: session.currentUser,
  messagesIndex: messagesIndex,
  currentConversation: conversationsIndex.currentConversation,
  dispatch: store.dispatch
});

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
