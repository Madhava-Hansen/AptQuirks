import React from 'react';
import QuirkIndexItem from './quirk_index_item';
import QuirkForm from './quirk_form';
import { Link, withRouter } from 'react-router-dom';

class QuirkIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quirks: "", errorMessage: "", revealQuirk: "hidden" };
    this.revealQuirk = "hidden";
    this.revealQuirkInfo = this.revealQuirkInfo.bind(this);
    this.redirectToAddQuirk = this.redirectToAddQuirk.bind(this);
    this.setApartmentId = this.setApartmentId.bind(this);
  }

  componentWillMount() {
    this.setApartmentId();
    this.props.fetchQuirks(this.apartmentId);
  }

  setApartmentId() {
    if (this.props.apartmentId === undefined) {
      this.apartmentId = this.props.location.pathname.split("/").pop();
    } else {
      this.apartmentId = this.props.apartmentId;
    }
  }

  revealQuirkInfo() {
    if (this.state.revealQuirk === "hidden") {
      this.setState({revealQuirk: "reveal-quirk-info group" });
    } else {
      this.setState({revealQuirk: "hidden" });
    }
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
    this.setApartmentId();
    if (this.apartmentId != nextProps.apartmentId) {
      this.props.fetchQuirks(nextProps.apartmentId);
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
          <p className="whats-a-quirk" onClick={this.revealQuirkInfo}> - What's a quirk?</p>
          <p className="add-quirk-error-message">{this.state.errorMessage}</p>
          <div className={this.state.revealQuirk}>
            <div className="quirk-info-absolute">
              <p onClick={this.revealQuirkInfo} className="close-quirk-info">close</p>
              <p className="whats-a-quirk-text">
                A quirk is just like a review on Yelp...but for an apartment.
                Let everyone know what it was like living at your last place by adding a quirk!
              </p>
            </div>
          </div>
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
