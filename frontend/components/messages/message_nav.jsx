import React from "react";
import { Link, withRouter } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments} from '@fortawesome/fontawesome-free-solid'

class MessageNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inboxActiveClass: '', composeActiveClass: '', revealCommentsIconClass: ''}
  }

  componentDidMount() {
    const path = this.props.history.location.pathname.split('com/').pop();
    if (path === "/inbox") {
      this.setState({inboxActiveClass: 'MailNavigation-activeMessgeLink', composeActiveClass: ''});
    } else if (path === "/compose") {
      this.setState({composeActiveClass: 'MailNavigation-activeMessgeLink', inboxActiveClass: ''});
    } else if (path.split('/')[1] === 'messages') {
      this.setState({revealCommentsIconClass: 'MailNavigation-revealCommentsIcon'})
    } 
  }

  redirectToNewMessage = () => {
    this.props.history.push("/compose");
  }

  render() {
    return (
      <ul className="MailNavigation">
        <li className="MailNavigation-linksWrapper">
          <li className={`MailNavigation-navItem ${this.state.inboxActiveClass}`}>
            <Link to="/inbox">Inbox</Link>
          </li>
          <li className={`MailNavigation-navItem ${this.state.composeActiveClass}`}>
            <p onClick={this.redirectToNewMessage}>Compose</p>
          </li>
        </li>
        <li>
          <FontAwesomeIcon 
            className={`MailNavigation-commentsIcon ${this.state.revealCommentsIconClass}`}
            size="lg" 
            icon={faComments} 
            onClick={this.handleToggleEditMode}
          />
        </li>
      </ul>
    );
  }
}

export default withRouter(MessageNav);
