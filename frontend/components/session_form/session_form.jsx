import React from 'react';
import { withRouter } from 'react-router-dom';
import { receiveErrors } from '../../actions/session_actions';
import ReCAPTCHA from "react-google-recaptcha";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: "", currentURL: "", captchaVerified: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.wipeOutErrors = this.wipeOutErrors.bind(this);
  }

  handleChange(response) {
    this.props.verifyCaptcha(response).then(captchaVerified => {
      this.setState({captchaVerified})
    })
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      if (this.props.location.pathname === "/login") {
        this.props.history.push("/home");
      } else {
        this.props.history.push("/profile");
      }
    }
  }

  handleSubmit(e) {
    if (!this.state.captchaVerified) {
      this.setState({showCaptchaError: true});
      setTimeout(() => {
        this.setState({showCaptchaError: false})
      }, 4000);
    } else {
      e.preventDefault();
      const user = this.state;
      this.props.processForm({ user });
    }
  }

  update(label) {
    return e => this.setState({
			[label]: e.currentTarget.value
		});
  }

  wipeOutErrors() {
      setTimeout(() => {
        this.props.dispatch(receiveErrors(null));
      }, 4000)
  }

  render() {
    const { formType, errors } = this.props;
    let classNames = "form-container containers"
    this.errorClass = errors ? 'session-errors' : 'no errors';
    if (this.errorClass === 'session-errors') {
      this.wipeOutErrors();
    }
    return (
      <section id="session-form-section" className={classNames}>
        <h3 className={ this.errorClass }>{ errors }</h3>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <h1 className="session-form-header">{formType}</h1>
            <input
              className="form-input"
              type="text"
              placeholder="username..."
              onChange={this.update("username")}
            />
            <input
              className="form-input"
              type="password"
              placeholder="password..."
              onChange={this.update("password")}
            />
            {this.state.showCaptchaError && (
              <div className="session-errors">Please verify that you're not a robot with reCaptcha</div>
            )}
              <div className="recaptcha">
              <ReCAPTCHA
                sitekey="6LdeUc0UAAAAAMzwWnZqiqWTmInhd4J57jryzc5C"
                type="image"
                onChange={response => this.handleChange(response)}
              />
              </div>
          <button className="form-button" type="submit" value="submit">Submit</button>
        </form>

      </section>
    )
  }


}

export default withRouter(SessionForm);
