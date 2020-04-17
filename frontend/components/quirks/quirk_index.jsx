import React from "react";
import { QuirkIndexItem } from "./quirk_index_item";
import { withRouter } from "react-router-dom";
import {fetchQuirks, addQuirk, deleteQuirk} from '../../util/quirk_api_util';
import QuirkForm from './quirk_form';

class QuirkIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quirks: [],
      revealQuirk: false,
      addQuirkErrorClassName: "hidden",
      revealQuirkForm: false,
      title: "",
      body: "",
      apt_number: "",
      noQuirksYet: false
    };
    this.defaultThumbnailUrl =
    "https://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png";
  }

  componentDidMount() {
    fetchQuirks(this.props.apartmentId || sessionStorage.getItem("apartmentId")).then(quirks => {
      this.setState({quirks}, () => {
        if (this.state.quirks.length === 0) {
          this.setState({noQuirksYet: true});
        }
      })
    })
  }

  static getDerivedStateFromProps(nextProps) {
    const { quirksIndex } = nextProps;
    if (quirksIndex && quirksIndex.quirks) {
      return { quirks: quirksIndex.quirks };
    }

    return null;
  }

  handleAddQuirk = (title, body, apt_number) => {
    if (!title || !body || !apt_number) {return;};
    const {currentUser: { id, username, thumbnail_url }} = this.props;
    const idsAndPic = {
      apartment_id: this.apartmentId || sessionStorage.getItem('apartmentId'),
      user_id: id,
      user_name: username,
      user_pic: thumbnail_url ? thumbnail_url : this.defaultThumbnailUrl,
    };
    addQuirk({ quirk: {title, body, apt_number, ...idsAndPic } }).then(
      quirk => {
        const newQuirks = this.state.quirks.slice(0);
        newQuirks.push(quirk);
        this.setState({revealQuirkForm: false, quirks: newQuirks});
      });
  }

  handleRevealQuirkInfo = () =>
    this.setState({ revealQuirk: !this.state.revealQuirk });

  handleRevealQuirkForm = () => this.setState({revealQuirkForm: true});

  handleHideQuirkForm = () => this.setState({revealQuirkForm: false});

  update = type => e => this.setState({ [type]: e.currentTarget.value });

  render() {
    const {apartmentId, history, apartmentShow} = this.props;
    const {revealQuirkForm} = this.state;
    return (
      <aside className="QuirksIndex">
        {revealQuirkForm && (
          <div className="QuirksIndex-addQuirkFormWrapper">
            <QuirkForm 
              apartmentId={apartmentId}
              history={history}
              apartmentShow={apartmentShow}
              handleAddQuirk={this.handleAddQuirk}
              handleHideQuirkForm={this.handleHideQuirkForm}
              update={this.update}
              {...this.state}
            />
          </div>
        )}
        <div className="QuirksIndex-headerSection">
          <button
            className="QuirksIndex-addQuirkButton"
            onClick={this.handleRevealQuirkForm}
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
          <ul className="QuirksIndex-quirksWrapper">
            {this.state.quirks.map(quirk => (
              <QuirkIndexItem quirk={quirk} key={quirk.id} />
            ))}
          </ul>
          {this.state.noQuirksYet && (
            <h1 className="QuirksIndex-noQuirksYetMessage">Be the first person to add a quirk!</h1>
          )}
      </aside>
    );
  }
}

export default withRouter(QuirkIndex);
