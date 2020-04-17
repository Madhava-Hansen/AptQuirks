import React, {useState, useEffect} from "react";
import {Link, withRouter} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faTrash} from '@fortawesome/fontawesome-free-solid'

const MailNavigation = ({
  handleDeleteConversations,
  handleToggleEditMode,
  hasConversationsToDelete,
  history
}) => {

  const [inboxActiveClass, setInboxActiveClass] = useState('');
  const [composeActiveClass, setComponseActiveClass] = useState('');
  const [revealCommentsIconClass, setRevealCommentsClass] = useState('');

  useEffect(() => {
    const path = history.location.pathname.split('com/').pop();
    if (path === "/inbox") {
      setInboxActiveClass('MailNavigation-activeMessgeLink');
    } else if (path === "/compose") {
      setComponseActiveClass('MailNavigation-activeMessgeLink');
    } else if (path.split('/')[1] === 'messages') {
      setRevealCommentsClass('MailNavigation-revealCommentsIcon');
    } 
  }, [])

  const redirectToNewMessage = () => {
    history.push("/compose");
  }

  return (
    <ul className="MailNavigation">
      <li className="MailNavigation-linksWrapper">
        <div className={`MailNavigation-navItem ${inboxActiveClass}`}>
          <Link to="/inbox">Inbox</Link>
        </div>
        <div className={`MailNavigation-navItem ${composeActiveClass}`}>
          <p onClick={redirectToNewMessage}>Compose</p>
        </div>
      </li>
      <li className="MailNavigation-iconsWrapper">
        <FontAwesomeIcon 
          className={`MailNavigation-commentsIcon ${revealCommentsIconClass}`}
          size="lg"
          icon={faComments} 
          onClick={handleToggleEditMode}
        />
        <FontAwesomeIcon 
          size="1x"
          icon={faTrash}
          className={`MailNavigation-trashIcon ${hasConversationsToDelete ? 'MailNavigation-hasConversationsToDelete': ''}`}
          onClick={handleDeleteConversations}
        />
      </li>
    </ul>
  );
}

export default withRouter(MailNavigation);
