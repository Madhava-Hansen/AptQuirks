import React from "react";
import UserSearchIndex from "./user_search_index";
import MessageNav from "./message_nav";
import {receiveUsers} from "../../actions/conversation_actions";

class NewMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.findUser = this.findUser.bind(this);
    this.handleUserSelection = this.handleUserSelection.bind(this);
  }

  findUser() {
    this.props.fetchUsers({ user: { username: this.state.username } });
  }

  componentDidMount() {
    const { users, dispatch } = this.props;
    if (users && users.length > 0) {
      dispatch(receiveUsers(null));
    }
  }

  update(e) {
    this.setState({ ["username"]: e.currentTarget.value });
    this.findUser();
  }

  handleUserSelection(user) {
    const { currentUser, createConversation } = this.props;
    const url = user.thumbnail_url
      ? user.thumbnail_url
      : "https://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png";
    const createConversationObject = {
      conversation: {
        receiver_id: user.id,
        sender_id: currentUser.id,
        receiver_username: user.username,
        sender_username: currentUser.username,
        receiver_image_url: url,
      },
    };
    createConversation(createConversationObject).then((conversationObj) => {
      this.props.history.push(`/messages/${conversationObj.conversation.id}`);
    });
  }

  render() {
    const { dispatch } = this.props;
    return (
      <section className="NewMessageWrpper">
        <div className="message-container">
          <MessageNav dispatch={dispatch} />
          <UserSearchIndex
            {...this.props}
            handleUserSelection={this.handleUserSelection}
            update={(e) => this.update(e)}
          />
        </div>
      </section>
    );
  }
}

export default NewMessage;
