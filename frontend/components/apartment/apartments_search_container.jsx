import { connect } from 'react=redux';
import ApartmentsForm from './apartments_form';
import { createApartment } from '../../actions/search_actions';

const mapStateToProps = ({ search }) => ({
});

const mapDispatchToProps = (dispatch) => ({
  createApartment: apartment => dispatch(createApartment(apartment))
});

const ApartmentsSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentsForm);

export default ApartmentsSearchContainer;
