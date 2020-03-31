import React from 'react';
import { withRouter } from 'react-router-dom';
import { receiveErrors } from '../../actions/session_actions';
import ReCAPTCHA from "react-google-recaptcha";

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "", 
      email: "",
      password: "", 
      captchaVerified: false
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.captchaVerified !== prevState.captchaVerified) {
      return {captchaVerified: nextProps.captchaVerified};
    }

    return null;
  }

  handleChange = response => this.props.verifyCaptcha(response);

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
  }

  missingSignupData = () => Object.keys(this.state).some(key => !this.state[key]);

  missinLoginData = () => !this.state.username || !this.state.password;

  handleClick = () => {
    const missingData = this.props.formType === 'login' ? this.missinLoginData() : this.missingSignupData();
    if (missingData) {
      this.setState({showCaptchaError: true});
      setTimeout(() => {
        this.setState({showCaptchaError: false})
      }, 4000);
    } else {
      this.props.processForm({user: this.state});
    }
  }

  update = label => {
    return e => this.setState({
			[label]: e.currentTarget.value
		});
  }

  wipeOutErrors = () => {
    setTimeout(() => {
      this.props.dispatch(receiveErrors(null));
    }, 4000)
  }

  render() {
    const {formType, errors} = this.props;
    this.errorClass = errors ? 'SessionForm-errors' : 'no errors';
    const isSignup = formType === 'signup';
    if (this.errorClass === 'session-errors') {
      this.wipeOutErrors();
    }
    return (
      <section className="SessionFormWrapper">
        <h3 className={ this.errorClass }>{ errors }</h3>
        <div className="SessionForm">
          <h1 className="SessionForm-header">{formType}</h1>
            <input
              className="SessionForm-input form-input"
              type="text"
              placeholder="username..."
              onChange={this.update("username")}
            />
            {isSignup && (
              <input
              className="SessionForm-input form-input"
              type="text"
              placeholder="email..."
              onChange={this.update("email")}
            />
            )}
            <input
              className="SessionForm-input form-input"
              type="password"
              placeholder="password..."
              onChange={this.update("password")}
            />
            {this.state.showCaptchaError && (
              <div className="SessionForm-errors">
                Please verify that you're not a robot with reCaptcha 
                or make sure to fill out all required fields
              </div>
            )}
            {isSignup && (
              <div className="SessionForm-recaptcha">
                <ReCAPTCHA
                  sitekey='6LdeUc0UAAAAAMzwWnZqiqWTmInhd4J57jryzc5C'
                  type="image"
                  onChange={response => this.handleChange(response)}
                />
              </div>
            )}
          <button onClick={this.handleClick} className="form-button">Submit</button>
        </div>

      </section>
    )
  }


}

export default withRouter(SessionForm);
