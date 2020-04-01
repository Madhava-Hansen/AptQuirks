import React from "react";
import { Link, withRouter } from "react-router-dom";
import { receiveConversation } from "../../actions/conversation_actions";

class MessageNav extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToNewMessage = this.redirectToNewMessage.bind(this);
  }

  redirectToNewMessage() {
    this.props.history.push("/message/new");
  }

  render() {
    return (
      <ul className="inbox-nav group">
        <li className="inbox-nav-item">
          <Link to="/inbox">inbox</Link>
        </li>
        <li className="inbox-nav-item">
          <p onClick={this.redirectToNewMessage}>new message</p>
        </li>
      </ul>
    );
  }
}

export default withRouter(MessageNav);
