import { connect } from 'react-redux';
import ApartmentShow from './apartment_show';
import { fetchQuirks } from '../../actions/quirk_actions';

const mapStateToProps = ({ apartmentShow, quirksIndex }) => {
  return {
    currentApartment: apartmentShow,
    quirks: quirksIndex
  }
};

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(addComment({comment})),
  fetchQuirks: apartment_id => dispatch(fetchQuirks(apartment_id))
});

const ApartmentShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentShow);

export default ApartmentShowContainer;
