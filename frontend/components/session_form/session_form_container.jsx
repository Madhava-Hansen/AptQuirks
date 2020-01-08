import { connect } from 'react-redux';
import { login, signup, verifyCaptcha } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    dispatch: store.dispatch,
    captchaVerified: session.captchaResponse
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = ( formType === 'login') ? login : signup;

  return {
    verifyCaptcha: response => dispatch(verifyCaptcha(response)),
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

const SessionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

export default SessionFormContainer;
