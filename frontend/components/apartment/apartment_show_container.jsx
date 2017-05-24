import { connect } from 'react-redux';
import ApartmentShow from './apartment_show';

const mapStateToProps = ({ apartmentShow }) => {
  return {
    currentApartment: apartmentShow
  }
};

const mapDispatchToProps = dispatch => ({
  addQuirk: quirk => dispatch(addQuirk({})),
  addComment: comment => dispatch(addComment({comment}))
});

const ApartmentShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentShow);

export default ApartmentShowContainer;
