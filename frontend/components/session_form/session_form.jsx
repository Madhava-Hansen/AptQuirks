import React from "react";
import { withRouter } from "react-router-dom";
import { receiveErrors } from "../../actions/session_actions";
import ReCAPTCHA from "react-google-recaptcha";
import {SessionFormInput} from './session_form_input';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      captchaVerified: undefined,
      showCaptchaError: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.captchaVerified !== prevState.captchaVerified) {
      return { captchaVerified: nextProps.captchaVerified };
    }

    return null;
  }

  handleChange = (response) => this.props.verifyCaptcha(response);

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn = () => {
    if (this.props.loggedIn) {
      if (this.props.location.pathname === "/login") {
        this.props.history.push("/home");
      } else {
        this.props.history.push("/profile");
      }
    }
  };

  handleClick = () => {
    const { captchaVerified, username, email, password } = this.state;
    const missingLoginData = !username || !password;
    const hasErrors =
      this.props.formType === "signup"
        ? missingLoginData || !email
        : missingLoginData;
    if (hasErrors) {
      this.setState({ showCaptchaError: true });
      setTimeout(() => {
        this.setState({ showCaptchaError: false });
      }, 4000);
    } else {
      this.props.processForm({ user: { username, email, password } });
    }
  };

  update = (label) => {
    return (e) =>
      this.setState({
        [label]: e.currentTarget.value,
      });
  };

  wipeOutErrors = () => {
    setTimeout(() => {
      this.props.dispatch(receiveErrors(null));
    }, 4000);
  };

  render() {
    const { formType, errors } = this.props;
    const errorClass = errors ? "SessionForm-errors" : "hidden";
    const isSignup = formType === "signup";
    if (this.errorClass === "session-errors") {
      this.wipeOutErrors();
    }
    return (
      <section className="SessionFormWrapper">
        <div className="SessionForm">
          <h3 className={errorClass}>{errors}</h3>
          {this.state.showCaptchaError && (
            <div className="SessionForm-errors">
              Please verify that you're not a robot with reCaptcha
            </div>
          )}
          <h1 className="SessionForm-header">{formType}</h1>
          <SessionFormInput
           name="username"
           update={this.update}
          />
          {isSignup && (
            <SessionFormInput
              name="email"
              update={this.update}
            />
          )}
            <SessionFormInput
              name="password"
              update={this.update}
            />
          {isSignup && (
            <div className="SessionForm-recaptcha">
              <ReCAPTCHA
                sitekey="6LdeUc0UAAAAAMzwWnZqiqWTmInhd4J57jryzc5C"
                type="image"
                onChange={(response) => this.handleChange(response)}
              />
            </div>
          )}
          <button onClick={this.handleClick} className="form-button">
            Submit
          </button>
        </div>
      </section>
    );
  }
}

export default withRouter(SessionForm);
