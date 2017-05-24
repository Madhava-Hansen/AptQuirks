import React from 'react';
import ApartmentShow from './apartment_show';
import { Route, Redirect } from 'react-router-dom';

class ApartmentSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({apartment: ""});
    this.currentURL = "";
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formatAddress = this.formatAddress.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfApartment();
  }

  redirectIfApartment() {
    if (this.props.location.pathname === "/apartments/show") {
      return;
    }
    if (this.props.currentApartment && this.currentURL === "") {
      this.props.history.replace("/apartments/show");
      this.currentURL = "/apartments/show";
    }
  }

  formatAddress(fullAddress) {
    const splitAddress = fullAddress.split(" ");
    splitAddress.pop();
    const finalFullAddress = splitAddress.join(" ").substring(0, splitAddress.join(" ").length - 1);
    return finalFullAddress;
  }

  handleSubmit(e) {
    e.preventDefault();
    const address = this.autocomplete.getPlace();
    const fullAddress = address.formatted_address;
    const lat = address.geometry.location.lat();
    const lon = address.geometry.location.lng();
    const finalFullAddress = this.formatAddress(fullAddress);
    const apartment = {street_address: finalFullAddress, lat: lat, lon: lon, longitude: lon, latitude: lat};
    this.props.createApartment({ apartment }).then(
        apartment => this.setState({ apartment: apartment }),
        this.input.value = ""
    );
  }

  componentDidMount() {
    const defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(40.571531, -74.22678),
      new google.maps.LatLng(40.904750, -73.716368)
    );

    const options = {
      bounds: defaultBounds
    };
    //
    this.input = document.getElementById('autocomplete');
    this.autocomplete = new google.maps.places.Autocomplete(this.input, options);
  }

  render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Apartment Search
              <br/>
            <input id="autocomplete" type="text"></input>
            </label>
            <br/>
            <button type="submit" value="submit">Search</button>
          </form>
        </div>
      )
  };

}

export default ApartmentSearch;
