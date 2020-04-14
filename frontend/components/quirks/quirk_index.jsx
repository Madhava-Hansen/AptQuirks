import React from "react";
import { QuirkIndexItem } from "./quirk_index_item";
import { withRouter } from "react-router-dom";

class QuirkIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quirks: [],
      revealQuirk: false,
      addQuirkErrorClassName: "hidden",
    };
  }

  componentDidMount() {
    this.props.fetchQuirks(
      this.props.apartmentId || sessionStorage.getItem("apartmentId")
    );
  }

  static getDerivedStateFromProps(nextProps) {
    const { quirksIndex } = nextProps;
    if (quirksIndex && quirksIndex.quirks) {
      return { quirks: quirksIndex.quirks };
    }

    return null;
  }

  handleRevealQuirkInfo = () =>
    this.setState({ revealQuirk: !this.state.revealQuirk });

  redirectToAddQuirk = () => {
    if (this.props.currentUser) {
      this.props.history.push(`/addquirk/${this.props.apartmentId}`);
    } else {
      this.setState({
        addQuirkErrorClassName: "QuirksIndex-addQuirkErrorMessage",
      });
      window.setTimeout(() => {
        this.setState({ addQuirkErrorClassName: "hidden" });
      }, 3000);
    }
  };

  render() {
    return (
      <aside className="QuirksIndex">
        <div className="QuirksIndex-headerSection">
          <button
            className="QuirksIndex-addQuirkButton"
            onClick={this.redirectToAddQuirk}
          >
            add quirk
          </button>
          <p
            className="QuirksIndex-whatsAQuirk"
            onClick={this.handleRevealQuirkInfo}
          >
            {" "}
            - What's a quirk?
          </p>
          <p className={this.state.addQuirkErrorClassName}>
            Please login to add a quirk!
          </p>
          <div
            className={
              this.state.revealQuirk ? "QuirksIndex-revealQuirkInfo" : "hidden"
            }
          >
            <div className="QuirksIndex-quirkInfoAbsolute">
              <p
                onClick={this.handleRevealQuirkInfo}
                className="QuirksIndex-closeQuirkInfo"
              >
                close
              </p>
              <p className="QuirksIndex-whatsAQuirkPopover">
                A quirk is a story about what it was like living at a house or
                apartment. Help other people out by telling your story about
                living at {this.props.apartmentShow.street_address}!
              </p>
            </div>
          </div>
        </div>
        {this.state.quirks.length > 0 ? (
          <ul className="QuirksIndex-quirksWrapper">
            {this.state.quirks.map(quirk => (
              <QuirkIndexItem quirk={quirk} key={quirk.user_name} />
            ))}
          </ul>
        ) : (
          <h1 className="QuirksIndex-noQuirksYetMessage">Be the first person to add a quirk!</h1>
        )}

      </aside>
    );
  }
}

export default withRouter(QuirkIndex);
