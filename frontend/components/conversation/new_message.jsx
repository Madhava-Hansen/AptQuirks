import React from 'react';
import UserSearchIndex from './user_search_index';
import MessageIndexContainer from './message_index_container';
import MessageNav from './message_nav';
import { receiveUsers } from '../../actions/message_actions';

class NewMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: ""}
    this.findUser = this.findUser.bind(this);
    this.update = this.update.bind(this);
    this.handleUserSelection = this.handleUserSelection.bind(this);
  }

  findUser() {
    this.props.fetchUsers({ user: { username: this.state.username } });
  }

  componentDidMount() {
    if (this.props.users) {
      if (this.props.users.length > 0) {
        this.props.dispatch(receiveUsers(null));
      }
    }
  }

  update(e) {
    this.setState({["username"]: e.currentTarget.value});
    this.findUser();
  }

  handleUserSelection(user) {
    const { currentUser, createConversation } = this.props;
    const url = user.thumbnail_url ? user.thumbnail_url : "http://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png";
    let createConversationObject =
     {conversation: {receiver_id: user.id, sender_id: currentUser.id,
       receiver_username: user.username, sender_username:
       currentUser.username, receiver_image_url: url }};
    createConversation(createConversationObject).then(conversationObj => {
      this.props.history.push(`/messages/${conversationObj.conversation.id}`);
      }
    )
  }

  render() {
    const { users, currentUser, currentConversation, dispatch } = this.props;
      return (
        <div className="message-container">
          <MessageNav
            dispatch={dispatch}
           />
          <form onSubmit={this.handleUserSelection} className="new-message-form">
            <label className="user-search-label">
              To:
              <input
                onChange={this.update}
                className="form-input"
                id="user-search-input"
                placeholder="Enter username..."
              />
            </label>
            <UserSearchIndex
              handleUserSelection={this.handleUserSelection}
              users={users}
              currentUser={currentUser}
             />
          </form>
        </div>
      )
  }
}

export default NewMessage;
