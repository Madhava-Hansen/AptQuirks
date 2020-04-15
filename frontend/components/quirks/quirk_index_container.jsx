import {connect} from "react-redux";
import QuirkIndex from "./quirk_index";

const mapStateToProps = ({apartmentShow, session}) => {
  if (session.currentUser) {
    return {
      apartmentId: apartmentShow.id,
      userId: session.currentUser.id,
      currentUser: session.currentUser,
      dispatch: store.dispatch,
      apartmentShow: apartmentShow,
    };
  } else {
    return {
      apartmentId: apartmentShow.id,
      userId: "1",
      dispatch: store.dispatch,
      apartmentShow: apartmentShow,
    };
  }
}

const QuirkIndexContainer = connect(
  mapStateToProps
)(QuirkIndex);

export default QuirkIndexContainer;
