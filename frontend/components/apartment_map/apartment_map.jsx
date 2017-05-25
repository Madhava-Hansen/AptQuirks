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
    let lat = this.props.currentApartment.latitude;
    let lng = this.props.currentApartment.longitude;
    const myLatLng = new google.maps.LatLng(lat, lng);
    this.map.setCenter(myLatLng);
    let marker = new MarkerManager(this.map);
    marker.createMarkerFromApartment(this.props.currentApartment);
  }

  createMap() {
    console.log("createmap");
      this.mapOptions = {
        center: { lat: this.lat, lng: this.lng },
        zoom: 14
      };

      this.map = new google.maps.Map(this.mapNode, this.mapOptions);
      let marker = new MarkerManager(this.map);
      marker.createMarkerFromApartment(this.props.currentApartment);
  }

  componentDidMount() {
    console.log(this.lat);
    console.log(this.lng);
    console.log("componentDidMount");
    this.createMap();
  };


  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }>
      </div>
    )
  }
};

export default ApartmentMap;
