import React from "react";
import { Link, withRouter } from "react-router-dom";
import { receiveConversation } from "../../actions/conversation_actions";

class MessageNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inboxActiveClass: '', composeActiveClass: ''}
  }

  componentDidMount() {
    const path = this.props.history.location.pathname.split('/').pop();
    if (path === "inbox") {
      this.setState({inboxActiveClass: 'activeMessgeLink', composeActiveClass: ''});
    } else if (path === "new") {
      this.setState({composeActiveClass: 'activeMessgeLink', inboxActiveClass: ''});
    }
  }

  redirectToNewMessage = () => {
    this.props.history.push("/message/new");
  }

  render() {
    return (
      <ul className="inbox-nav group">
        <li className={`inbox-nav-item ${this.state.inboxActiveClass}`}>
          <Link to="/inbox">Inbox</Link>
        </li>
        <li className={`inbox-nav-item ${this.state.composeActiveClass}`}>
          <p onClick={this.redirectToNewMessage}>Compose</p>
        </li>
      </ul>
    );
  }
}

export default withRouter(MessageNav);
