import React from "react";
import { withRouter } from "react-router-dom";
import InboxItem from "./inbox_item";
import { receiveConversation } from "../../actions/conversation_actions";
import MessageNav from "./message_nav";

class Inbox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchConversations();
    scrollTo(0, 0);
  }

  redirectToNewMessage = () => this.props.history.push("/message/new");

  fetchMessages = conversation => {
    const { dispatch, fetchMessages, history } = this.props;
    dispatch(receiveConversation(conversation));
    fetchMessages({ message: { conversation_id: conversation.id } });
    history.push(`/messages/${conversation.id}`);
  };

  render() {
    const { conversationsIndex, currentUser, dispatch } = this.props;
    let conversationsIndexRender;
    if (conversationsIndex.conversations) {
      conversationsIndexRender = conversationsIndex.conversations.map(
        (conversation, idx) => {
          return (
            <InboxItem
              conversation={conversation}
              fetchMessages={() => this.fetchMessages(conversation)}
              currentUser={currentUser}
              key={idx}
            />
          );
        }
      );
    }
    return (
      <div className="InboxWrapper">
        <div className="group message-container">
          <MessageNav dispatch={dispatch} />
          <ul className="conversation-index-list">{conversationsIndexRender}</ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Inbox);
