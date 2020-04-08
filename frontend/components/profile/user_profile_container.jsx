import { connect } from "react-redux";
import { addPhoto, updateUser } from "../../actions/session_actions";
import UserProfile from "./user_profile";

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addPhoto: (user) => dispatch(addPhoto(user)),
  updateUser: (user) => dispatch(updateUser(user)),
});

const UserProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

export default UserProfileContainer;
