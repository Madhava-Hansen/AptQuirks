import React from "react";
import {withRouter} from "react-router-dom";
import InboxItem from "./inbox_item";
import MessageNav from "./mail_navigation";
import {Checkbox} from '../pattern_library/pl_checkbox';

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

  redirectToMessagesIndex = conversationId => this.props.history.push(`/messages/${conversationId}`);

  // add conversatino to state array of conversations to delete and then delete it
  handleAddConversationAndThenDeleteConversation = conversation => {
    this.setState({conversationsToDelete: this.getNewConversationToDeleteArrary(conversation)}, () => {
      this.handleDeleteConversations();
    })
  }

  // delete the current state array of conversations to delete
  handleDeleteConversations = () => {
    this.props.deleteConversations({
      conversation: {ids: this.state.conversationsToDelete, user_id: this.props.currentUser.id}
    })
    this.setState({conversationsToDelete: []});
  }

  // add a conversation to the state array of conversations to delete but don't delete anything yet
  handleAddConversationToDelete = conversation => {
    this.setState({conversationsToDelete: this.getNewConversationToDeleteArrary(conversation)});
  }

  // returns an array with the current state conversationsToDelete and the new converation added
  getNewConversationToDeleteArrary = conversation => {
    const {conversationsToDelete} = this.state;
    let newConversationsToDelete = this.state.conversationsToDelete.slice(0);
    if (conversationsToDelete.includes(conversation.id)) {
      newConversationsToDelete = newConversationsToDelete.filter(id => id !== conversation.id);
    } else {
      newConversationsToDelete.push(conversation.id);
    }

    return newConversationsToDelete;
  }

  render() {
    const {currentUser, dispatch} = this.props;
    const hasConversationsToDelete = this.state.conversationsToDelete.length > 0;
    return (
      <div className="Inbox">
        <div className="group message-container">
          <MessageNav
           dispatch={dispatch} 
           handleDeleteConversations={this.handleDeleteConversations}
           hasConversationsToDelete={hasConversationsToDelete}
          />
          <ul className="conversation-index-list">{
            this.state.conversations.map(conversation => {
              const isChecked = this.state.conversationsToDelete.includes(conversation.id);
              return (
                <div 
                  key={conversation.id} 
                  className="Inbox-itemWrapper"
                >
                  <Checkbox 
                    handleClick={() => this.handleAddConversationToDelete(conversation)}
                    isActive={isChecked}
                  />
                <InboxItem
                  conversation={conversation}
                  currentUser={currentUser}
                  redirectToMessagesIndex={this.redirectToMessagesIndex}
                  deleteConversation={this.handleAddConversationAndThenDeleteConversation}
                />
              </div>
              )
            })
          }</ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Inbox);
