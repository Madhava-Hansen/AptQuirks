import {connect} from "react-redux";
import MessageIndex from "./message_index";
import {fetchConversation, createMessage} from "../../actions/conversation_actions";

const mapStateToProps = ({session, messagesIndex, conversationsIndex}) => ({
  currentUser: session.currentUser,
  messagesIndex: messagesIndex,
  currentConversation: conversationsIndex.currentConversation,
  dispatch: store.dispatch
});

const mapDispatchToProps = dispatch => ({
  createMessage: ids => dispatch(createMessage(ids)),
  fetchConversation: id => dispatch(fetchConversation(id))
});

const MessageIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageIndex);

export default MessageIndexContainer;
