import React from 'react';
import ApartmentMap from '../apartment_map/apartment_map';
import QuirkIndexContainer from '../quirks/quirk_index_container';
import LikeButtonContainer from '../likes/like_button_container';
import ImageIndexContainer from '../images/image_index_container';
import ErrorBoundary from '../error_boundary/error_boundary';

class ApartmentShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({currentApartment: {}});
  }

  componentDidMount() {
    if (JSON.stringify(this.props.currentApartment) === JSON.stringify({})) {
      const apartmentId = this.props.location.pathname.split("/").pop();
      this.props.fetchApartment( {apartment: {id: apartmentId}});
    }
    window.scrollTo(0, 0);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(nextProps.currentApartment) !== JSON.stringify(prevState.currentApartment)) {
      const addressArray = nextProps.currentApartment.address.split(",");
      const streetAddress = addressArray[0];
      const cityStateZip = [addressArray[1], addressArray[2]].join(",");
      return {
        currentApartment: {streetAddress, cityStateZip, ...nextProps.currentApartment}, 
      };
    }

    return null;
  }

  hasApartmentData = currentApartment => Object.keys(currentApartment).length > 0;

  render() {
    const {currentApartment} = this.state;
    const shouldShowApartment = this.hasApartmentData(currentApartment);
    return(
      <section className="ApartmentShowWrapper">
        <div className="ApartmentShowWrapper-apartmentDetailsContainer">
        {shouldShowApartment && (
          <article className="ApartmentShowWrapper-apartmentShow">
            <div className="ApartmentShowWrapper-addressWrapper">
              <h1 className="ApartmentShowWrapper-streetAddress">{currentApartment.streetAddress}</h1>
              <h3 className="ApartmentShowWrapper-cityStateZip">{currentApartment.cityStateZip}</h3>
            </div>
          <div className="ApartmentShowWrapper-mapWrapper">
            <ApartmentMap currentApartment={currentApartment} />
          </div>

          <div className="group">
            <LikeButtonContainer />
          </div>
          </article>
          )}
          <ErrorBoundary>
            <ImageIndexContainer />
          </ErrorBoundary>
        </div>
          <aside className="quirksIndexWrapper">
            <QuirkIndexContainer />
          </aside>
      </section>
    )
  }
}

export default ApartmentShow;
