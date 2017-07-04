import React from 'react';
import MessageIndexItem from './message_index_item';
import MessageNav from './message_nav';


class MessageIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: "" };
    this.url = "http://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png";
    this.update = this.update.bind(this);
    this.handleMessageSend = this.handleMessageSend.bind(this);
    this.fetchMessages = this.fetchMessages.bind(this);
  }

  fetchMessages(conversationId) {
    const messageObject = { message: {conversation_id: conversationId} };
    this.props.fetchMessages(messageObject);
  }

  componentWillMount() {
    if (this.props.conversationsIndex.currentConversation === undefined) {
      this.conversationId = this.props.location.pathname.split("/").pop();
      this.props.fetchConversation({ conversation: { id: this.conversationId } });
    } else {
      this.conversationId = this.props.conversationsIndex.currentConversation.id;
    }
    this.fetchMessages(this.conversationId);
  }

  componentDidMount() {
    this.input = document.getElementById("message-form-input");
  }

  handleMessageSend(e) {
    e.preventDefault();
    const { createMessage, currentUser, conversationsIndex } = this.props;
    const receiver_id = conversationsIndex.currentConversation.receiver_id;
    const conversationId = conversationsIndex.currentConversation.id;
    const createMessageObject = { message: { read: false, user_id: currentUser.id,
       conversation_id: conversationId, body: this.state.message }};
    createMessage(createMessageObject);
    this.input.value = "";
  }

  update(e) {
    this.setState({ message: e.currentTarget.value });
  }

  render() {
    const { conversationsIndex, fetchMessages, messagesIndex,
      currentConversation, currentUser } = this.props;
    if (conversationsIndex.currentConversation) {
        this.username = conversationsIndex.currentConversation.receiver.username;
        this.url = conversationsIndex.currentConversation.receiver.thumbnail_url ?
        conversationsIndex.currentConversation.receiver.thumbnail_url :
        "http://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png"
    }
    let messages;
    if (messagesIndex.messages) {
      const messagesArray = Object.keys(messagesIndex.messages).map(key => messagesIndex.messages[key]);
      messages = messagesArray.map((message, idx) => {
        return (
          <MessageIndexItem
            message={message}
            currentUser={currentUser}
            key={idx}/>
        )
        });
      } else {
        messages = (<h3>No messages</h3>);
      }
        return (
          <div>
            <div className="message-index-container">
              <MessageNav />
              <div className="group messages-header-container">
                <img className="message-profile-pic" src={this.url} alt="profile picture"></img>
                <h1 className="messages-index-header">{this.username}</h1>
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
