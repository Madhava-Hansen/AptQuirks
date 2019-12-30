import React from 'react';
import MarkerManager from '../../util/marker_manager';

class ApartmentMap extends React.Component {

  constructor(props) {
    super(props);
    this.lat = this.props.currentApartment.latitude;
    this.lng = this.props.currentApartment.longitude;
    this.createMap = this.createMap.bind(this);
  }

  componentDidUpdate() {
      const { latitude, longitude } = this.props.currentApartment;
      const myLatLng = new google.maps.LatLng(latitude, longitude);
      this.map.setCenter(myLatLng);
      let marker = new MarkerManager(this.map);
      marker.createMarkerFromApartment(this.props.currentApartment);
  }

  createMap() {
      this.mapOptions = {
        center: new google.maps.LatLng(this.lat, this.lng),
        zoom: 14
      };

      this.map = new google.maps.Map(this.mapNode, this.mapOptions);
      let marker = new MarkerManager(this.map);
      marker.createMarkerFromApartment(this.props.currentApartment);
  }

  componentDidMount() {
    this.createMap();
  };


  render() {
    return (
      <div id="MapWrapper" ref={ map => this.mapNode = map }>
      </div>
    )
  }
};

export default ApartmentMap;
