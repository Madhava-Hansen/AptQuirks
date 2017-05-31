import React from 'react';
import ApartmentIndexItem from './apartment_index_item';
import { withRouter } from 'react-router-dom';

class ApartmentIndex extends React.Component {

  constructor(props) {
    super(props);
    this.redirectToAptShow = this.redirectToAptShow.bind(this)
  }

  redirectToAptShow(apartmentId) {
    const formattedId = {apartment: {id: apartmentId}}
    this.props.fetchApartment(formattedId).then(
      () => this.props.history.replace(`/apartments/${apartmentId}`)
    )
  }

  componentWillMount() {
    const ids = {apartment: {ids: ['1', '2', '3', '4', '5', '6', '7', '8']}};
    this.props.fetchApartments(ids);
  }

  render() {
    const { apartmentIndex } = this.props;
    const apartments = Object.keys(apartmentIndex).map(key => apartmentIndex[key]);
    return (
      <div>
        <ul>
          {apartments.map((apartment, idx) =>
            <ApartmentIndexItem
              apartment={apartment}
              key={idx}
              redirect={this.redirectToAptShow}
           />)}
        </ul>
      </div>
    )
  }
}

export default withRouter(ApartmentIndex);
