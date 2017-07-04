import { connect } from 'react-redux';
import ApartmentShow from './apartment_show';
import { fetchQuirks } from '../../actions/quirk_actions';
import { fetchApartment } from '../../actions/search_actions';
import { fetchImages, addImage } from '../../actions/image_actions';

const mapStateToProps = ({ apartmentShow, quirksIndex, session, likes }) => {
  if (session.currentUser) {
    return {
      currentApartment: apartmentShow,
      quirks: quirksIndex,
      userId: session.currentUser.id,
      apartmentId: apartmentShow.id,
      currentLike: likes.currentLike,
      fetchImages: fetchImages,
    }
  } else {
      return {
        currentApartment: apartmentShow,
        quirks: quirksIndex,
        userId: "1",
        apartmentId: apartmentShow.id,
        currentLike: likes.currentLike,
        fetchImages: fetchImages
    }
  }

};

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(addComment({comment})),
  fetchQuirks: apartment_id => dispatch(fetchQuirks(apartment_id)),
  fetchApartment: apartment_id => dispatch(fetchApartment(apartment_id))
});

const ApartmentShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentShow);

export default ApartmentShowContainer;
