import React from 'react';
import ApartmentMap from '../apartment_map/apartment_map';
import QuirkIndexContainer from '../quirks/quirk_index_container';
import LikeButtonContainer from '../likes/like_button_container';

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

  componentWillMount() {
    if (JSON.stringify(this.props.currentApartment) === JSON.stringify({})) {
      const id = this.props.location.pathname.slice(12);
      const formattedId = {apartment: {id: id}};
      this.props.fetchApartment(formattedId);
    }
  }

  render() {
    const { userId, apartmentId } = this.props;
      return(
        <div>
            <h1>{this.props.currentApartment.street_address}</h1>
            <LikeButtonContainer />
            <ApartmentMap currentApartment={this.props.currentApartment} />
            <QuirkIndexContainer />
        </div>
      )
    }
}

export default ApartmentShow;
