import {connect} from "react-redux";
import NewMessage from "./compose_message";
import {createConversation, fetchUsers} from "../../actions/conversation_actions";

const mapStateToProps = ({session, messagesIndex, conversationsIndex}) => ({
  currentUser: session.currentUser,
  users: conversationsIndex.users,
  messages: messagesIndex,
  conversationsIndex: conversationsIndex,
  dispatch: store.dispatch
})

const mapDispatchToProps = dispatch => ({
  createConversation: ids => dispatch(createConversation(ids)),
  fetchUsers: userName => dispatch(fetchUsers(userName)),
  dispatch
});

const NewMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessage);

export default NewMessageContainer;
