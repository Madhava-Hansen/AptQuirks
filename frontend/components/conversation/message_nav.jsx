import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
          <p onClick={ this.redirectToNewMessage }>new message</p>
        </li>
        <div className="divider"></div>
      </ul>
    )
  }
}

export default withRouter(MessageNav);
