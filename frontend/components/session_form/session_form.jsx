import React from "react";
import { withRouter } from "react-router-dom";
import { receiveErrors } from "../../actions/session_actions";
import ReCAPTCHA from "react-google-recaptcha";
import {SessionFormInput} from './session_form_input';
import {Checkbox} from '../pattern_library/pl_checkbox';
import {fetchUser} from '../../util/session_api_util';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.emailValidationRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.state = {
      username: "",
      email: "",
      password: "",
      captchaVerified: undefined,
      hasErrors: false,
      hasAcceptedTerms: false,
      usernameExists: false
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
    const {captchaVerified, username, email, password, hasAcceptedTerms} = this.state;
    const isSignup = this.props.formType === 'signup';
    const missingLoginData = !username || !password;
    const hasErrors =
    isSignup
        ? missingLoginData || !this.validateEmail() || !hasAcceptedTerms
        : missingLoginData;
    if (hasErrors) {
      this.setState({ hasErrors: true });
      setTimeout(() => {
        this.setState({ hasErrors: false });
      }, 4000);
    } else {
      this.props.processForm({ user: { username, email, password } });
    }
  };

  update = label => {
    return (e) =>
      this.setState({
        [label]: e.currentTarget.value,
      });
  };

  wipeOutErrors = () => {
    setTimeout(() => {
      this.props.dispatch(receiveErrors(null));
    }, 4000);
  }

  updateUsername = name => e => {
    this.setState({[name]: e.currentTarget.value});
    this.validateUsername(e.currentTarget.value);
  }

  validateUsername = username => {
    fetchUser({user: {username: username}}).then(response => {
      if (!response) {
        this.setState({usernameExists: false});
      } else {
        this.setState({usernameExists: true});
      }
    })
  }

  validateEmail = () => this.emailValidationRegex.test(this.state.email.toLowerCase());

  validateLength = (string, length) => string.length >= length;

  handleToggleCheckbox = () => this.setState({hasAcceptedTerms: !this.state.hasAcceptedTerms});

  render() {
    const {formType, errors} = this.props;
    const {hasAcceptedTerms, usernameExists, password} = this.state;
    const errorClass = errors ? "SessionForm-errors" : "hidden";
    const isSignup = formType === "signup";
    const hasValidUsername = this.state.username.length >= 8 && isSignup;
    const hasValidPassword = this.state.password.length >= 8 && isSignup;
    if (this.errorClass === "session-errors") {
      this.wipeOutErrors();
    }
    return (
      <section className="SessionFormWrapper">
        <div className="SessionForm">
          <h3 className={errorClass}>{errors}</h3>
          {this.state.hasErrors && (
            <div className="SessionForm-errors">
              Please fill out all fields and check all boxes
            </div>
          )}
          <h1 className="SessionForm-header">
            {formType}
          </h1>
            <>
              <SessionFormInput
              name="username"
              update={this.updateUsername}
              type="text"
              isValid={hasValidUsername}
              />
              {(usernameExists && isSignup) && (
                <p className="SessionForm-usernameError">username already exists</p>
              )}
            </>
          {isSignup && (
            <SessionFormInput
              name="email"
              update={this.update}
              type="email"
              isValid={this.validateEmail()}
            />
          )}
            <>
              <SessionFormInput
                name="password"
                update={this.update}
                type="password"
                isValid={hasValidPassword}
              />
              {(password.length > 0 && password.length < 8) && (
                <p className="SessionForm-passwordErrorWarning">password must be minimum of 8 characters</p>
              )}
            </>
          {isSignup && (
            <>
              <div className="SessionForm-recaptcha">
                <ReCAPTCHA
                  sitekey="6LdeUc0UAAAAAMzwWnZqiqWTmInhd4J57jryzc5C"
                  type="image"
                  onChange={(response) => this.handleChange(response)}
                />
              </div>
              <div className="SessionForm-termsAndConditionsWrapper">
                <div className="SessionForm-checkboxWrapper">
                  <Checkbox 
                    handleClick={this.handleToggleCheckbox}
                    isActive={hasAcceptedTerms}
                  />
                </div>
                <p>I agree to the
                  <a
                    target="_blank"
                    className="SessionForm-termsAndConditionsLink" 
                    href="https://app.termly.io/document/terms-of-use-for-website/c1ad278a-901a-4f1b-9e14-54e318c56599"> terms and conditions
                  </a>
                </p>
              </div>
            </>
          )}
          <button onClick={this.handleClick} className="form-button">
            Submit
          </button>
          {isSignup ? (
            <p className="SessionForm-alreadyHaveAccount">Already have an account? <Link to="/login">Login</Link></p>
          ): (
            <p className="SessionForm-alreadyHaveAccount">Don't have an account? <Link to="/signup">Sign up</Link></p>
          )}
        </div>
      </section>
    );
  }
}

export default withRouter(SessionForm);
