import { connect } from 'react-redux';
import ApartmentSearch from './apartment_search';
import { createApartment } from '../../actions/search_actions';
import { fetchQuirks } from '../../actions/quirk_actions';

const mapStateToProps = ({ apartmentShow, session }) => {
  return {
    currentApartment: Boolean(apartmentShow.street_address),
    apartmentShow: apartmentShow
  }
};

const mapDispatchToProps = (dispatch, { location }) => ({
  createApartment: apartment => dispatch(createApartment(apartment)),
  fetchQuirks: apartment_id => dispatch(fetchQuirks(apartment_id))
});

const ApartmentSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentSearch);

export default ApartmentSearchContainer;
