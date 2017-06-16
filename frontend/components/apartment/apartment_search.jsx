import React from 'react';
import ApartmentShow from './apartment_show';
import { Route, withRouter } from 'react-router-dom';

class ApartmentSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({apartment: ""});
    this.currentURL = "";
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formatAddress = this.formatAddress.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentApartment) {
      nextProps.history.push(`/apartments/${nextProps.apartmentShow.id}`);
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
    const finalFullAddress = this.formatAddress(fullAddress);
    const apartmentParams = {apartment: {street_address: finalFullAddress, longitude: lon, latitude: lat}};
    this.props.createApartment(apartmentParams);
    this.input.value = ""
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
    let atHome = this.props.location.pathname === '/home' ? true : false;
    let buttonClass;
    let inputClass;
    let maginifineGlassId;
    let formClass;
    if (atHome) {
      buttonClass = "search-button-home";
      inputClass = "search-input-home";
      maginifineGlassId = "home-magnifine-glass"
      formClass = "search-form-home"

    } else {
      buttonClass = "search-button";
      inputClass = "search-input";
      maginifineGlassId = "maginifine-glass";
      formClass = "search-form";
    }
      return (
        <div className="search-bar-container">
          <form className={formClass} onSubmit={this.handleSubmit}>
            <label>
            <input className={inputClass} id="autocomplete" type="text"></input>
          </label>
            <button className={buttonClass} type="submit" value="submit">
              <img src="assets/magnifine-glass.png" id={maginifineGlassId} alt="magnifine glass"></img>
            </button>
          </form>
        </div>

      )
  };

}

export default withRouter(ApartmentSearch);
