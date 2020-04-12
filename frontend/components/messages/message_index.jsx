import React from "react";
import MessageIndexItem from "./message_index_item";
import MessageNav from "./message_nav";

class MessageIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      message: '',
      revealMessagesClass: 'hidden'
    }
  }

  componentDidMount() {
    const {currentConversation, location, fetchConversation, fetchMessages} = this.props;
    const conversationId = location.pathname.split("/").pop();
    if (!currentConversation) {
      fetchConversation(conversationId);
    }
    const messageObject = { message: { conversation_id: conversationId } };
    fetchMessages(messageObject);
  }


  static getDerivedStateFromProps(nextProps) {
    if (nextProps.messagesIndex) {
      const {messagesIndex: {messages}} = nextProps;
      return {messages, revealMessagesClass: 'revealMessages'};
    }

    return null;
  }

  getReceiverUsername = () => {
    if (this.props.currentConversation && this.props.currentUser) {
      const {currentConversation: {receiver_username, sender_username}, currentUser: {username}} = this.props;
      // figure out username for who currentUser is messaging to display at top of message index
      return username === receiver_username ? sender_username : receiver_username;
    }
  }

  handleMessageSend = e => {
    if (!this.state.message) {
      return;
    }
    e.preventDefault();
    const { createMessage, currentUser, currentConversation } = this.props;
    const createMessageObject = {
      message: {
        read: false,
        user_id: currentUser.id,
        conversation_id: currentConversation.id,
        body: this.state.message
      }
    };
    createMessage(createMessageObject);
    this.setState({message: ''});
  }

  update = e => this.setState({ message: e.target.value });

  render() {
    const {currentUser, dispatch} = this.props;
    const {messages, revealMessagesClass} = this.state;
    return (
      <div className="message-index-div">
        <div className="message-index-container">
          <MessageNav 
            dispatch={dispatch} 
          />
          <div className="messages-receiver-username">To: {this.getReceiverUsername()}</div>
          <ul className={`messages-index ${revealMessagesClass}`}>
            {messages.map(message => 
              <MessageIndexItem
                message={message}
                currentUser={currentUser}
                key={message.body}
              />
            )}
          </ul>
        </div>
        <form className="message-form">
          <label className="form-label">
            <input
              placeholder="enter message..."
              id="message-form-input"
              className="form-input"
              onChange={this.update}
              value={this.state.message}
            />
          </label>
          <button
            id="message-send-button"
            type="submit"
            onClick={this.handleMessageSend}
          >
            send
          </button>
        </form>
      </div>
    );
  }
}

export default MessageIndex;
