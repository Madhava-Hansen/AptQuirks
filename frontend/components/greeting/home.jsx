import React from "react";
import ApartmentIndexContainer from '../apartment/apartment_index_container';
import ApartmentSearchContainer from '../apartment/apartment_search_container';

class Home extends React.Component {

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className="Homepage">
        <div className="Homepage-homeTextContainer">
          <div className="Homepage-wrapper">
            <div className="Homepage-textWrapper">
              <h1 className="Homepage-headingText">
                Get to know your next apartment
              </h1>
              <h3 className="Homepage-subHeadingText"> before you sign a lease.</h3>
            </div>
            <ApartmentSearchContainer />
          </div>
        </div>
        <section className="Homepage-apartmentIndexContainer">
          <h1 className="Homepage-featuredApartmentsText">Featured Apartments</h1>
          <ApartmentIndexContainer />
        </section>
      </main>
    )
  }

}

export default Home;
