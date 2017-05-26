import { connect } from 'react-redux';
import ApartmentShow from './apartment_show';

const mapStateToProps = ({ apartmentShow }) => {
  return {
    currentApartment: apartmentShow
  }
};

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(addComment({comment}))
});

const ApartmentShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentShow);

export default ApartmentShowContainer;
