import { connect } from "react-redux";
import FeaturedApartments from "./featured_apartments";
import { fetchApartments, fetchApartment } from "../../actions/search_actions";

const mapStateToProps = ({ apartmentShow }) => {
  return {
    apartmentIndex: apartmentShow,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchApartments: (ids) => dispatch(fetchApartments(ids, dispatch)),
  fetchApartment: (id) => dispatch(fetchApartment(id, dispatch)),
});

const FeaturedApartmentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedApartments);

export default FeaturedApartmentsContainer;
