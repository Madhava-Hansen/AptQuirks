import React from 'react';
import QuirkIndexItem from './quirk_index_item';
import QuirkForm from './quirk_form';

class QuirkIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quirks: "" };
  }

  componentDidUpdate() {
    if (this.props.quirks ){
      if (this.props.apartment_id != this.props.quirks[0].apartment_id) {
        this.props.fetchQuirks(this.props.apartment_id).then(
          this.setState({ quirks: quirks })
        );
      }
    }
  }

  render() {
    console.log("quirks index render called");
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
