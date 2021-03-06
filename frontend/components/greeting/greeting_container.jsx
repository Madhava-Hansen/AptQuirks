import { connect } from "react-redux";
import { logout, login } from "../../actions/session_actions";
import Greeting from "./greeting";

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
});

const GreetingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);

export default GreetingContainer;
