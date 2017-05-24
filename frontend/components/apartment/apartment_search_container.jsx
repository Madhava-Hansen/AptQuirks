import { connect } from 'react-redux';
import ApartmentSearch from './apartment_search';
import { createApartment } from '../../actions/search_actions';

const mapStateToProps = ({ apartmentShow }) => {
  return {
    currentApartment: Boolean(apartmentShow.street_address),
    apartmentShow: apartmentShow
  }
};

const mapDispatchToProps = (dispatch, { location }) => ({
  createApartment: apartment => dispatch(createApartment(apartment))
});

const ApartmentSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentSearch);

export default ApartmentSearchContainer;
