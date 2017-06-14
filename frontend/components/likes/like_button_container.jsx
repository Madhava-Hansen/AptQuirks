import { connect } from 'react-redux';
import { like, unlike, fetchLikes } from '../../actions/like_actions';
import LikeButton from './like_button';

const mapStateToProps = ({ likes, apartmentShow, session }) => {
  if (session.currentUser) {
    return {
      apartmentId: apartmentShow.id,
      userId: session.currentUser.id,
      likesIndex: likes
    }
  } else {
    return {
      apartmentId: apartmentShow.id,
      likesIndex: likes
    }
  }


};

const mapDispatchToProps = dispatch => {
  return {
    like: likeObject => dispatch(like(likeObject)),
    unlike: currentLike => dispatch(unlike(currentLike)),
    fetchLikes: apartment_id => dispatch(fetchLikes(apartment_id))
  }
};

const LikeButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton);

export default LikeButtonContainer;
