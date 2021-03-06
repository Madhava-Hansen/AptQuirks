import React from "react";
import ApartmentMap from "../apartment_map/apartment_map";
import QuirkIndex from "../quirks/quirk_index";
import {QuirkReviewStarsAverages} from '../quirks/quirk_review_stars_feature';
import LikeButtonContainer from "../likes/like_button_container";
import ImageIndexContainer from "../images/image_index_container";
import ErrorBoundary from "../error_boundary/error_boundary";

class ApartmentShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentApartment: {}, quirks: [], sessionDoorwayOpen: false };
    
  }

  componentDidMount() {
    const { fetchApartment, apartmentId } = this.props;
    if (apartmentId) {
      // add apartmentId to session storage to access on page refresh
      sessionStorage.setItem("apartmentId", `${apartmentId}`);
    }
    const localApartmentId =
      apartmentId || sessionStorage.getItem("apartmentId");
    fetchApartment({ apartment: { id: localApartmentId } });
    window.scrollTo(0, 0);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      JSON.stringify(nextProps.currentApartment) !==
      JSON.stringify(prevState.currentApartment)
    ) {
      sessionStorage.setItem("apartmentId", `${nextProps.apartmentId}`);
      const addressArray = nextProps.currentApartment.address.split(",");
      const streetAddress = addressArray[0];
      const cityStateZip = [addressArray[1], addressArray[2]].join(",");
      return {
        currentApartment: {
          streetAddress,
          cityStateZip,
          ...nextProps.currentApartment,
        },
      };
    } 

    return null;
  }

  handleRevealSessionDoorway = () => {
    this.setState({sessionDoorwayOpen: true});
  }

  getQuirksForReviewsFeature = quirks => this.setState({quirks});

  hasApartmentData = currentApartment =>
    Object.keys(currentApartment).length > 0;

  render() {
    const { currentApartment } = this.state;
    const shouldShowApartment = this.hasApartmentData(currentApartment);
    return (
      <section className="ApartmentShowWrapper">
        <div className="ApartmentShowWrapper-apartmentDetailsContainer">
          {shouldShowApartment && (
            <article className="ApartmentShowWrapper-apartmentShow">
              <div className="ApartmentShowWrapper-addressWrapper">
                <h1 className="ApartmentShowWrapper-streetAddress">
                  {currentApartment.streetAddress}
                </h1>
                <h3 className="ApartmentShowWrapper-cityStateZip">
                  {currentApartment.cityStateZip}
                </h3>
              </div>
              <div className="ApartmentShowWrapper-mapWrapper">
                <ApartmentMap currentApartment={currentApartment} />
              </div>

              <div className="group">
                <LikeButtonContainer />
              </div>
            </article>
          )}
          <QuirkReviewStarsAverages quirks={this.state.quirks} />
          <ErrorBoundary>
            <ImageIndexContainer />
          </ErrorBoundary>
        </div>
        <aside className="ApartmentShowWrapper-quirksIndexWrapper">
          <div>
          </div>
          <QuirkIndex 
            currentApartment={currentApartment} 
            apartmentId={currentApartment.id} 
            currentUser={this.props.currentUser} 
            getQuirksForReviewsFeature={this.getQuirksForReviewsFeature}
          />
        </aside>
      </section>
    );
  }
}

export default ApartmentShow;
