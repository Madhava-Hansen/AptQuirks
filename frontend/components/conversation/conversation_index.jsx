import React from 'react';
import { withRouter } from 'react-router-dom';

class ConversationIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchConversations(this.props.currentUser.id);
  }

  render() {
    return (
      <div>
        Converstion Index
      </div>
    )
  }
}

export default withRouter(ConversationIndex);
