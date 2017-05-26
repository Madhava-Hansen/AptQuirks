import React from 'react';
import ApartmentMap from '../apartment_map/apartment_map';
import QuirkIndexContainer from '../quirks/quirk_index_container';

class ApartmentShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({currentApartment: ""});
    this.getCity = this.getCity.bind(this);
    this.getState = this.getState.bind(this);
    this.getZip = this.getZip.bind(this);
    this.getStreetAddress = this.getStreetAddress.bind(this);
  }

  getCity(finalFullAddress) {
    const city = finalFullAddress.split(",")[1];
    return city;
  }

  getState(finalFullAddress) {
    const state = finalFullAddress.split(",")[2].split(" ")[1];
    return state;
  }

  getZip(finalFullAddress) {
    const zipCode = finalFullAddress.split(",")[2].split(" ")[2];
    return zipCode;
  }

  getStreetAddress(finalFullAddress) {
    const streeAddress = finalFullAddress.split(",")[0];
  }

  formatAddress(currentApartment) {
    const city = this.getCity(finalFullAddress);
    const state = this.getState(finalFullAddress);
    const zipCode = this.getZip(finalFullAddress);
    const streeAddress = this.getStreetAddress(finalFullAddress);
  }

  render() {
      return(
        <div>
            <h1>{this.props.currentApartment.street_address}</h1>
            <ApartmentMap currentApartment={this.props.currentApartment} />
            <QuirkIndexContainer />
        </div>
      )
    }
}

export default ApartmentShow;
