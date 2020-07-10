import React from "react";
import FeaturedApartmentsContainer from "../apartment/featured_apartments_container";
import ApartmentSearchContainer from "../apartment/apartment_search_container";

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isLoaded: ''}
  }
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleImageIsLoaded = () => this.setState({isLoaded: 'Homepage--isLoaded'});

  render() {
    return (
      <main className="Homepage">
        <div className={`Homepage-aboveTheFoldWrapper ${this.state.isLoaded}`}>
        <img
          className="Homepage-homepageHeroImage"
          onLoad={this.handleImageIsLoaded}
          src="https://res.cloudinary.com/aptquirks/image/upload/v1578704085/pexels-photo-271816_tuarlv.jpg">
        </img>
        <div className="Homepage-searchContent">
            <div className="Homepage-textWrapper">
              <h1 className="Homepage-headingText">
                Get to know your next apartment
              </h1>
              <h3 className="Homepage-subHeadingText">
                {" "}
                before you sign a lease.
              </h3>
            </div>
            <ApartmentSearchContainer />
          </div>
        </div>
        <section className="Homepage-apartmentIndexContainer">
          <h1 className="Homepage-featuredApartmentsText">
            Featured Reviews
          </h1>
          <FeaturedApartmentsContainer />
        </section>
      </main>
    );
  }
}

export default Home;
