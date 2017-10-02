import React from 'react';
import MessageIndexItem from './message_index_item';
import MessageNav from './message_nav';


class MessageIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { messages: [], username: "", url: "http://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png" };
    this.update = this.update.bind(this);
    this.handleMessageSend = this.handleMessageSend.bind(this);
    this.fetchMessages = this.fetchMessages.bind(this);
    this.setUserDetails = this.setUserDetails.bind(this);
  }

  fetchMessages(conversationId) {
    const messageObject = { message: {conversation_id: conversationId} };
    this.props.fetchMessages(messageObject);
  }

  componentWillMount() {
    if (this.props.currentConversation === undefined) {
      this.conversationId = this.props.location.pathname.split("/").pop();
      this.props.fetchConversation({ conversation: { id: this.conversationId } });
    } else {
      this.conversationId = this.props.currentConversation.id;
    }
    this.fetchMessages(this.conversationId);
  }

  setUserDetails(nextProps) {
    let { currentConversation, currentUser } = nextProps;
    let username = currentConversation.receiver_username === currentUser.username ?
    currentConversation.sender_username : currentConversation.receiver_username;
    let url = currentConversation.receiver_image_url ?
    currentConversation.receiver_image_url :
      "http://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png"
      this.setState({username: username, url: url });
  }

  componentDidMount() {
    this.input = document.getElementById("message-form-input");
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.messagesIndex.messages) {
      this.setState({messages: nextProps.messagesIndex.messages});
    }
    if (nextProps.currentConversation) {
      this.setUserDetails(nextProps);
    }
  }

  handleMessageSend(e) {
    e.preventDefault();
    const { createMessage, currentUser, currentConversation } = this.props;
    const receiver_id = currentConversation.receiver_id;
    const conversationId = currentConversation.id;
    const createMessageObject = { message: { read: false, user_id: currentUser.id,
       conversation_id: conversationId, body: this.state.message }};
    createMessage(createMessageObject);
    this.input.value = "";
  }

  update(e) {
    this.setState({ message: e.currentTarget.value });
  }

  render() {
    const { fetchMessages, messagesIndex, currentUser } = this.props;
    let messages;
    if (this.state.messages.length > 0) {
      messages = this.state.messages.map((message, idx) => {
        return (
          <MessageIndexItem
            message={message}
            currentUser={currentUser}
            key={idx}/>
        )
        });
      } else {
        messages = [];
      }
        return (
          <div className="message-index-div">
            <div className="message-index-container">
              <MessageNav />
              <div className="group messages-header-container">
                <img className="message-profile-pic" src={this.state.url} alt="profile picture"></img>
                <h1 className="messages-index-header">{this.state.username}</h1>
              </div>

              <ul className="messages-index">
                {messages}
              </ul>
            </div>

              <form className="message-form">
                <div className="send-message-section">
                  <label className="form-label">
                    <input
                      placeholder="enter message..."
                      id="message-form-input"
                      className="form-input"
                      onChange={this.update}
                     />
                  </label>
                  <button id="message-send-button" type="submit" onClick={this.handleMessageSend}>send</button>
                </div>

              </form>
          </div>
        )
  }



}

export default MessageIndex;
