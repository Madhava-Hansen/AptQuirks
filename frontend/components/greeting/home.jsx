import React from "react";
import ApartmentIndexContainer from '../apartment/apartment_index_container';
import ApartmentSearchContainer from '../apartment/apartment_search_container';

class Home extends React.Component {

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main>
        <div className="home-text-container">
        <h1 className="home-main-text">
          Get to know your next apartment before you sign a lease.
        </h1>
          <ApartmentSearchContainer />
        </div>
        <section className="apartment-index-container">
          <h1 className="featured-apartments-text">Featured Apartments</h1>
          <ApartmentIndexContainer />
        </section>
      </main>
    )
  }

}

export default Home;
