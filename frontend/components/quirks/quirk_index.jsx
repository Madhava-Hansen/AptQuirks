import React from 'react';
import {QuirkIndexItem} from './quirk_index_item';
import {withRouter} from 'react-router-dom';
import {receiveQuirks} from '../../actions/quirk_actions';

class QuirkIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quirks: [], 
      revealQuirk: "hidden"
    };
  }

  componentDidMount() {
    this.props.fetchQuirks(this.props.apartmentId || sessionStorage.getItem('apartmentId'));
  }

  static getDerivedStateFromProps(nextProps) {
    const {quirksIndex} = nextProps;
    if (quirksIndex && quirksIndex.quirks) {
      return {quirks: quirksIndex.quirks};
    }

    return null;
  }

  revealQuirkInfo = () => {
    if (this.state.revealQuirk === "hidden") {
      this.setState({revealQuirk: "reveal-quirk-info group" });
    } else {
      this.setState({revealQuirk: "hidden" });
    }
  }

  redirectToAddQuirk = () => {
    if (this.props.currentUser) {
      this.props.history.push(`/addquirk/${this.props.apartmentId}`)
    } else {
      let errors = document.getElementById("add-quirk-error-message");
      errors.className = "add-quirk-error-message";
      window.setTimeout(() => {
        errors.className = "hidden";
      }, 3000)
    }
  }

  deleteQuirk = (ids, that) => {
    let { deleteQuirk, dispatch } = that.props;
    deleteQuirk(ids);
    let quirksClone = that.props.quirksIndex.quirks.slice(0);
    quirksClone.map((quirk, idx) => {
      if (quirk.id === ids.id) {
        quirksClone.splice(idx, 1);
        dispatch(receiveQuirks(quirksClone));
        return;
      }
    })
  }

  render() {
    const {currentUser, apartmentShow} = this.props;
    let quirksHeader = "quirks-header group"
    return (
      <aside className="quirks-index-container">
        <div className={ quirksHeader }>
          <button className="add-quirk-button" onClick={ this.redirectToAddQuirk }>add quirk</button>
          <p className="whats-a-quirk" onClick={ this.revealQuirkInfo }> - What's a quirk?</p>
          <p id="add-quirk-error-message" className="hidden">Please login to add a quirk!</p>
          <div className={ this.state.revealQuirk }>
            <div className="quirk-info-absolute">
              <p onClick={ this.revealQuirkInfo } className="close-quirk-info">close</p>
              <p className="whats-a-quirk-text">
                A quirk is a story about what it was like living at a house or apartment. Help other people out
                 by telling your story about living at { apartmentShow.street_address }!
              </p>
            </div>
          </div>
        </div>
        <ul>
          {this.state.quirks
            .map((quirk, idx) => 
              <QuirkIndexItem
                deleteQuirk={ this.deleteQuirk }
                that={this}
                quirk={quirk}
                key={idx}
                currentUser={currentUser}
              />)
           }
        </ul>
      </aside>
    )
  }
}

export default withRouter(QuirkIndex);
