import { connect } from "react-redux";
import ApartmentShow from "./apartment_show";
import { fetchApartment } from "../../actions/search_actions";

const mapStateToProps = ({apartmentShow, session}) => {
  return {
    currentApartment: {
      address: apartmentShow.street_address,
      longitude: apartmentShow.longitude,
      latitude: apartmentShow.latitude
    },
    userId: (session.currentUser && session.currentUser.id) || "1",
    apartmentId: apartmentShow.id,
    currentUser: session.currentUser
  }
};

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(addComment({ comment })),
  fetchApartment: apartment_id => dispatch(fetchApartment(apartment_id)),
});

const ApartmentShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentShow);

export default ApartmentShowContainer;
