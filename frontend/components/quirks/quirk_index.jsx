import React from 'react';
import QuirkIndexItem from './quirk_index_item';
import QuirkForm from './quirk_form';

class QuirkIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quirks: "" };
    this.formatDate = this.formatDate.bind(this);
    this.formatDays = this.formatDays.bind(this);
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

  formatDate(date) {
    let oldDate = new Date(date);
    let currentDate = new Date();
    let months = (currentDate.getYear() - oldDate.getYear()) * 12;
    months -= (oldDate.getMonth() + 1);
    months += (currentDate.getMonth() + 1);
    if (months === 0) {
      return {days: this.formatDays(currentDate, oldDate)};
    } else {
      return {months: months};
    }
  }

  formatDays(currentDate, oldDate) {
    return (currentDate.getUTCDate() - oldDate.getUTCDate());
  }

  updateQuirks(apartment_id) {
    this.props.fetchQuirks(apartment_id);
  }

  render() {
    const { quirks } = this.props;
    const quirksArray = Object.keys(quirks).map(key => quirks[key] );
    return (
      <div>
        <ul>
          {quirksArray.map((quirk, idx) => <QuirkIndexItem date={this.formatDate(quirk.created_at)} quirk={quirk} key={idx}/>)}
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
