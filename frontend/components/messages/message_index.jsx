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
    const {currentConversation, location, fetchConversation} = this.props;
    const conversationId = location.pathname.split("/").pop();
    if (!currentConversation || currentConversation.id !== conversationId) {
      fetchConversation(conversationId);
    }
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.currentConversation && nextProps.currentConversation.messages) {
      return {messages: nextProps.currentConversation.messages};
    }

    return null;
  }

  getReceiverUsername = () => {
    if (this.props.currentConversation && this.props.currentUser) {
      const {currentConversation: {receiver_username, sender_username}, currentUser: {username}} = this.props;
      // figure out username for who currentUser is messaging to display at top of message index
      return username === receiver_username ? receiver_username: sender_username;
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
      <section className="MessageIndexWrapper">
        <div className="MessageIndex">
            <MessageNav 
              dispatch={dispatch} 
            />
            <div className="MessageIndex-receiverUsername">To: {this.getReceiverUsername()}</div>
            <ul className="MessageIndex-messages">
              {messages.map(message => 
                <MessageIndexItem
                  message={message}
                  currentUser={currentUser}
                  key={message.id}
                />
              )}
            </ul>
            <form className="MessageIndex-form">
              <input
                placeholder="enter message..."
                className="MessageIndex-formInput form-input"
                onChange={this.update}
                value={this.state.message}
              />
              <button
                className="MessageIndex-sendButton"
                type="submit"
                onClick={this.handleMessageSend}
              >
                send
              </button>
          </form>
          </div>
      </section>
    );
  }
}

export default MessageIndex;
