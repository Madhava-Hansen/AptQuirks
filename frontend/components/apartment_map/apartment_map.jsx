import React from 'react';

class ApartmentMap extends React.Component {

  constructor(props) {
    super(props);
  };

  componentDidMount() {
      const mapOptions = {
        center: { lat: 40.760081, lng: -73.980220 }, // this is SF
        zoom: 13
      };
      this.map = new google.maps.Map(this.mapNode, mapOptions);
  };


  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }>
      </div>
    )
  }
};

export default ApartmentMap;
