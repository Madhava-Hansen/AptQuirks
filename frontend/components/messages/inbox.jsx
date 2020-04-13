import React from "react";
import {withRouter} from "react-router-dom";
import InboxItem from "./inbox_item";
import MessageNav from "./message_nav";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from '@fortawesome/fontawesome-free-solid'

class Inbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {conversationsToDelete: [], conversations: []}
  }

  componentDidMount() {
    this.props.fetchConversations();
    scrollTo(0, 0);
  }
  
  static getDerivedStateFromProps(nextProps) {
    if (nextProps.conversationsIndex && nextProps.conversationsIndex.conversations) {
      return {conversations: nextProps.conversationsIndex.conversations};
    }

    return null;
  }

  redirectToNewMessage = () => this.props.history.push("/message/new");

  redirectToMessagesIndex = conversationId => {
    this.props.history.push(`/messages/${conversationId}`)
  };

  handleDeleteConversations = () => {
    this.props.deleteConversations({
      conversation: {ids: this.state.conversationsToDelete, user_id: this.props.currentUser.id}
    })
    this.setState({conversationsToDelete: []});
  }

  handleChangeCheckbox = conversation => {
    const {conversationsToDelete} = this.state;
    let newConversationsToDelete = this.state.conversationsToDelete.slice(0);
    if (conversationsToDelete.includes(conversation.id)) {
      newConversationsToDelete = newConversationsToDelete.filter(id => id !== conversation.id);
    } else {
      newConversationsToDelete.push(conversation.id);
    }
    this.setState({conversationsToDelete: newConversationsToDelete});
  }
  render() {
    const {currentUser, dispatch} = this.props;
    return (
      <div className="Inbox">
        <div className="group message-container">
          <MessageNav dispatch={dispatch} />
          {this.state.conversationsToDelete.length > 0 && (
            <FontAwesomeIcon 
              size="1x"
              icon={faTrash}
              className="Inbox-icon"
              onClick={this.handleDeleteConversations}
            />
          )}
          <ul className="conversation-index-list">{
            this.state.conversations.map(conversation =>
              <div className="Inbox-itemWrapper">
                <input
                  className="InboxItem-checkbox"
                  type="checkbox"
                  onChange={() => this.handleChangeCheckbox(conversation)}
                ></input>
                <InboxItem
                  conversation={conversation}
                  currentUser={currentUser}
                  key={currentUser.id}
                  redirectToMessages={this.redirectToMessagesIndex}
                />
              </div>
            )
          }</ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Inbox);
