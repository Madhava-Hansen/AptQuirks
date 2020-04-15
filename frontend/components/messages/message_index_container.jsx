import {connect} from "react-redux";
import MessageIndex from "./message_index";
import {fetchConversation} from "../../actions/conversation_actions";

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  dispatch: store.dispatch
});

const mapDispatchToProps = dispatch => ({
  fetchConversation: id => dispatch(fetchConversation(id))
});

const MessageIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageIndex);

export default MessageIndexContainer;
