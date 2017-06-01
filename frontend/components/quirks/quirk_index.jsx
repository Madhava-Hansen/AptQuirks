import React from 'react';
import QuirkIndexItem from './quirk_index_item';
import QuirkForm from './quirk_form';

class QuirkIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quirks: "" };
  }

  componentWillMount() {
    if (this.props.apartmentId) {
      this.props.fetchQuirks(this.props.apartmentId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.apartmentId) != JSON.stringify(nextProps.apartmentId)) {
      this.updateQuirks(nextProps.apartmentId);
    }
    if (nextProps.quirks.newQuirk === null) {
      this.updateQuirks(nextProps.apartmentId);
    }
  }

  updateQuirks(apartmentId) {
    this.props.fetchQuirks(apartmentId);
  }

  render() {
    const { quirks, deleteQuirk, userId } = this.props;
    if (quirks["newQuirk"] === null) {
      delete quirks.newQuirk;
    };
    const quirksArray = Object.keys(quirks).map(key => quirks[key]);

    return (
      <div>
        <ul>
          {quirksArray
            .map((quirk, idx) => <QuirkIndexItem
             deleteQuirk={deleteQuirk}
             quirk={quirk}
             key={idx}
             userId={userId}
           />)}

        </ul>
        <QuirkForm
          addQuirk={this.props.addQuirk}
          apartmentId={this.props.apartmentId}
          userId={this.props.userId}
          username={this.props.username}
         />
      </div>
    )
  }
}

export default QuirkIndex;
