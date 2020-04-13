import {connect} from "react-redux";
import Inbox from "./inbox";
import {fetchConversations, deleteConversations} from "../../actions/conversation_actions";
import {fetchMessages} from "../../actions/message_actions";

const mapStateToProps = ({conversationsIndex, session}) => ({
  conversationsIndex: conversationsIndex,
  newConversation: conversationsIndex.newConversation,
  currentUser: session.currentUser,
  dispatch: store.dispatch
})

const mapDispatchToProps = dispatch => ({
  fetchConversations: id => dispatch(fetchConversations(id)),
  fetchMessages: id => dispatch(fetchMessages(id)),
  deleteConversations: ids => dispatch(deleteConversations(ids))
});

const InboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Inbox);

export default InboxContainer;
