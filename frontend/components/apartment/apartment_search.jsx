import React from "react";
import ApartmentShow from "./apartment_show";
import { Route, withRouter } from "react-router-dom";

class ApartmentSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apartment: "" };
    this.currentURL = "";
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formatAddress = this.formatAddress.bind(this);
  }

  componentDidUpdate() {
    const {
      props: { currentApartment },
      props,
    } = this;
    if (currentApartment) {
      props.history.push(`/apartments/${props.apartmentShow.id}`);
    }
  }

  formatAddress(fullAddress) {
    const splitAddress = fullAddress.split(" ");
    splitAddress.pop();
    const finalFullAddress = splitAddress
      .join(" ")
      .substring(0, splitAddress.join(" ").length - 1);
    return finalFullAddress;
  }

  handleSubmit(e) {
    e.preventDefault();
    const address = this.autocomplete.getPlace();
    const fullAddress = address.formatted_address;
    const lat = address.geometry.location.lat();
    const lon = address.geometry.location.lng();
    const finalFullAddress = this.formatAddress(fullAddress);
    const apartmentParams = {
      apartment: {
        street_address: finalFullAddress,
        longitude: lon,
        latitude: lat,
      },
    };
    this.props.createApartment(apartmentParams);
    this.input.value = "";
  }

  componentDidMount() {
    const defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(40.571531, -74.22678),
      new google.maps.LatLng(40.90475, -73.716368)
    );

    const options = {
      bounds: defaultBounds,
    };
    this.input = document.getElementById("autocomplete");
    this.autocomplete = new google.maps.places.Autocomplete(
      this.input,
      options
    );
  }

  render() {
    return (
      <div className="ApartmentSearch">
        <form className="search-form-home" onSubmit={this.handleSubmit}>
          <label>
            <input
              placeholder="Search for any address..."
              className="ApartmentSearch-searchInputHome"
              id="autocomplete"
              type="text"
            ></input>
          </label>
          <button className="search-button-home" type="submit" value="submit">
            <img
              src="https://res.cloudinary.com/aptquirks/image/upload/v1497653777/c0hrzxnw4ss1lvazuyui.png"
              id="home-magnifine-glass"
              alt="magnifine glass"
            ></img>
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(ApartmentSearch);
