import React from "react";
import ApartmentIndexContainer from '../apartment/apartment_index_container';
import ApartmentSearchContainer from '../apartment/apartment_search_container';

class Home extends React.Component {

  render() {
    return (
      <main>
        <div className="home-text-container">
        <h1 className="home-main-text">
          Get to know your future apartment before you sign a lease.
        </h1>
          <ApartmentSearchContainer />
        </div>
        <section className="apartment-index-container">
          <h1 className="featured-apartments-text">Featured Apartments</h1>
          <div className="divider"></div>
          <ApartmentIndexContainer />
        </section>
      </main>
    )
  }

}

export default Home;
