import React from 'react';
import ApartmentMap from '../apartment_map/apartment_map';

class ApartmentShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ApartmentMap />
      </div>
    )
  }
}

export default ApartmentsShow;
