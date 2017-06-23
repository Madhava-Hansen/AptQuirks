import React from 'react';
import QuirkIndexItem from './quirk_index_item';
import QuirkForm from './quirk_form';
import { Link, withRouter } from 'react-router-dom';

class QuirkIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quirks: "", errorMessage: "" };
    this.redirectToAddQuirk = this.redirectToAddQuirk.bind(this);
  }

  componentWillMount() {
    if (this.props.apartmentId === undefined) {
      this.apartmentId = this.props.location.pathname.split("/").pop();
    } else {
      this.apartmentId = this.props.apartmentId;
    }

    this.props.fetchQuirks(this.apartmentId).then(quirks => {
            this.setState({ quirks: quirks });
      }
    );
  }

  redirectToAddQuirk() {
    if (this.props.currentUser) {
      this.props.history.push(`/addquirk/${this.props.apartmentId}`)
    } else {
      this.setState({ errorMessage: "You must be logged in to add a quirk" });
      return;
    }
  }

  componentWillReceiveProps(nextProps) {
    const { fetchQuirks, apartmentId } = this.props;

    if (apartmentId != nextProps.apartmentId) {
      fetchQuirks(nextProps.apartmentId);
    }
    if (nextProps.newQuirk === null) {
      fetchQuirks(nextProps.apartmentId);
    }
    if (JSON.stringify(this.props.quirks) != JSON.stringify(nextProps.quirks)) {
      fetchQuirks(nextProps.apartmentId);
    }
  }

  render() {
    const { quirks, deleteQuirk, userId,
    apartmentId, currentUser, addQuirk,
    username } = this.props;

    if (quirks["newQuirk"] === null) {
      delete quirks.newQuirk;
    };
    const quirksArray = Object.keys(quirks).map(key => quirks[key]);
    let quirksHeader = "quirks-header group"
    return (
      <aside className="quirks-index-container">
        <div className={quirksHeader}>
          <button className="add-quirk-button" onClick={this.redirectToAddQuirk}>add quirk</button>
          <p className="add-quirk-error-message">{this.state.errorMessage}</p>
        </div>
        <ul>
          {quirksArray
            .map((quirk, idx) => <QuirkIndexItem
             deleteQuirk={deleteQuirk}
             quirk={quirk}
             key={idx}
             currentUser={currentUser}
           />)}

        </ul>
      </aside>
    )
  }
}

export default withRouter(QuirkIndex);
