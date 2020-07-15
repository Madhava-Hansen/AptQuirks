import {connect} from "react-redux";
import {addPhoto, saveUser, updateUserDetails, login} from "../../actions/session_actions";
import UserProfile from "./user_profile";

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  addPhoto: user => dispatch(addPhoto(user)),
  saveUser: user => dispatch(saveUser(user)),
  updateUser: user => dispatch(updateUserDetails(user)),
  login: user => dispatch(login(user))

});

const UserProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

export default UserProfileContainer;
