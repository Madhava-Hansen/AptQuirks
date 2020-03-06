import React from 'react';
import ApartmentIndexItem from './apartment_index_item';
import {withRouter} from 'react-router-dom';

class ApartmentIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  redirectToAptShow = apartmentId => {
    this.props.fetchApartment({apartment: {id: apartmentId}}).then(() => {
      this.props.history.push(`/apartments/${apartmentId}`)
    })
  }

  componentDidMount() {
    const ids = { apartment: { id: '54,53,52,47' } };
    this.props.fetchApartments(ids);
  }

  render() {
    const {apartmentIndex} = this.props;
    const apartments = Object.keys(apartmentIndex).map(key => apartmentIndex[key]);
    return (
      <div className="group">
        <ul className="FeaturedApartments">
          { apartments.map((apartment, idx) =>
            <ApartmentIndexItem
              apartment={ apartment }
              key={ idx }
              redirect={ this.redirectToAptShow }
           />) }
        </ul>
      </div>
    )
  }
}

export default withRouter(ApartmentIndex);
