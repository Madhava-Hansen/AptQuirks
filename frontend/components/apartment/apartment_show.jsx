import React from 'react';
import ApartmentMap from '../apartment_map/apartment_map';
import QuirkIndexContainer from '../quirks/quirk_index_container';
import LikeButtonContainer from '../likes/like_button_container';
import ImageIndexContainer from '../images/image_index_container';
import ErrorBoundary from '../error_boundary/error_boundary';

class ApartmentShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({currentApartment: ""});
    this.formattAddress = this.formattAddress.bind(this);
  }

  componentDidMount() {
    if (JSON.stringify(this.props.currentApartment) === JSON.stringify({})) {
      const id = this.props.location.pathname.split("/").pop();
      const formattedId = {apartment: {id: id}};
      this.props.fetchApartment(formattedId);
    }
    window.scrollTo(0, 0);
  }

  formattAddress() {
    let addressArray = this.props.currentApartment.street_address.split(",");
    this.streetAddress = addressArray[0];
    this.cityStateZip = [addressArray[1], addressArray[2]].join(",");
  }

  render() {
    const { userId, apartmentId } = this.props;
    if (apartmentId) {
      this.formattAddress();
    }

    let classes = "group ApartmentShowWrapper"
      return(
        <section className={ classes }>
          <div className="ApartmentShowWrapper-apartmentDetailsContainer">
            <article className="ApartmentShowWrapper-apartmentShow">
              <div className="ApartmentShowWrapper-addressWrapper">
                <h1 className="ApartmentShowWrapper-streetAddress">{ this.streetAddress }</h1>
                <h3 className="ApartmentShowWrapper-cityStateZip">{ this.cityStateZip }</h3>
              </div>
            <div className="ApartmentShowWrapper-mapWrapper">
              <ApartmentMap currentApartment={ this.props.currentApartment } />
            </div>
            <div className="group">
              <LikeButtonContainer />
            </div>
            </article>
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
