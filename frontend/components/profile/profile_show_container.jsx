import { connect } from 'react-redux';
import { addPhoto, updateUser } from '../../actions/session_actions';
import ProfileShow from './profile_show';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
})

const mapDispatchToProps = dispatch => ({
  addPhoto: user => dispatch(addPhoto(user)),
  updateUser: user => dispatch(updateUser(user))
})

const ProfileShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileShow);

export default ProfileShowContainer;
