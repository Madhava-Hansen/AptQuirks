import {connect} from "react-redux";
import LikeButton from "./like_button";

const mapStateToProps = ({ likes, apartmentShow, session }) => {
  if (session.currentUser) {
    return {
      apartmentId: apartmentShow.id,
      userId: session.currentUser.id,
      likesIndex: likes,
      dispatch: store.dispatch,
    };
  } else {
    return {
      apartmentId: apartmentShow.id,
      likesIndex: likes,
      dispatch: store.dispatch,
    };
  }
}

const LikeButtonContainer = connect(
  mapStateToProps
)(LikeButton);

export default LikeButtonContainer;
