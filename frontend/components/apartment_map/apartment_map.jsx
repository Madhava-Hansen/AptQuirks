import React from 'react';
import MarkerManager from '../../util/marker_manager';

class ApartmentMap extends React.Component {

  constructor(props) {
    super(props);
    this.lat = this.props.currentApartment.latitude;
    this.lon = this.props.currentApartment.longitude;
  }

  componentDidUpdate() {
    this.newMapOptions = {
      center: {lat: this.lat, lng: this.lon},
      zoom: 14
    };
    this.marker.createMarkerFromApartment(this.props.currentApartment);
  }

  componentDidMount() {
    console.log("componentDidMount");
      this.mapOptions = {
        center: { lat: this.lat, lng: this.lon },
        zoom: 14
      };

      this.map = new google.maps.Map(this.mapNode, this.mapOptions);
      this.marker = new MarkerManager(this.map);
      this.marker.createMarkerFromApartment(this.props.currentApartment);
  };


  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }>
      </div>
    )
  }
};

export default ApartmentMap;
