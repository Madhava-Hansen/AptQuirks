import React from 'react';

class ApartmentSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    const apartment = this.autocomplete.getPlace();
    const address = apartment.formatted_address;
    this.props.createApartment(apartment);
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
    const input = document.getElementById('autocomplete');
    this.autocomplete = new google.maps.places.Autocomplete(input, options);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleInput}>
          <label>Apartment Search
            <br/>
          <input id="autocomplete" type="text"></input>
          </label>
          <br/>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default ApartmentSearch;
