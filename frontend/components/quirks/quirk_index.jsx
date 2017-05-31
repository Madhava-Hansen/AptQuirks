import React from 'react';
import QuirkIndexItem from './quirk_index_item';
import QuirkForm from './quirk_form';

class QuirkIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quirks: "" };
  }

  componentWillMount() {
    if (this.props.apartment_id) {
      this.props.fetchQuirks(this.props.apartment_id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.apartment_id) != JSON.stringify(nextProps.apartment_id)) {
      this.updateQuirks(nextProps.apartment_id);
    }
  }

  updateQuirks(apartment_id) {
    this.props.fetchQuirks(apartment_id);
  }

  render() {
    debugger;
    const { quirks } = this.props;
    const quirksArray = Object.keys(quirks).map(key => quirks[key] );
    return (
      <div>
        <ul>
          {quirksArray.map((quirk, idx) => <QuirkIndexItem quirk={quirk} key={idx}/>)}
        </ul>
        <QuirkForm
          addQuirk={this.props.addQuirk}
          apartment_id={this.props.apartment_id}
          user_id={this.props.user_id}
         />
      </div>
    )
  }
}

export default QuirkIndex;
