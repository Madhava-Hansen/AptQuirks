import React from "react";
import ApartmentIndexContainer from '../apartment/apartment_index_container';

class Home extends React.Component {

  render() {
    return (
      <div>
        <h1>
          Get to know your future apartment before you sign a lease.
        </h1>
        <div>
          <h1>Featured Apartments</h1>
          <ApartmentIndexContainer />
        </div>
      </div>
    )
  }

}

export default Home;
