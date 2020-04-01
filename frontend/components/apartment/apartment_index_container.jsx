import { connect } from "react-redux";
import ApartmentIndex from "./apartment_index";
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

const ApartmentIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentIndex);

export default ApartmentIndexContainer;
