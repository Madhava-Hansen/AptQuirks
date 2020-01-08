import React from 'react';
import { withRouter } from 'react-router-dom';
import { receiveErrors } from '../../actions/session_actions';
import { loadReCaptcha, ReCaptcha } from 'react-recaptcha-google'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: "", currentURL: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.wipeOutErrors = this.wipeOutErrors.bind(this);
  }

  componentDidMount() {
    loadReCaptcha();
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }

  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }

  onChangeCapatcha() {
    debugger;
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
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
  }

  update(label) {
    return e => this.setState({
			[label]: e.currentTarget.value
		});
  }

  wipeOutErrors() {
      window.setTimeout(() => {
        this.props.dispatch(receiveErrors(null));
      }, 5000)
  }

  render() {
    const { currentUser, addPhoto, formType, errors } = this.props;
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
            <div className="form-captcha">
              <ReCaptcha
                ref={(el) => {this.captchaDemo = el;}}
                size="normal"
                sitekey="6LdeUc0UAAAAAMzwWnZqiqWTmInhd4J57jryzc5C"
                onloadCallback={this.onLoadRecaptcha}
                verifyCallback={this.verifyCallback}
                onChange={this.onChangeCapatcha}
              />
          </div>
          <button className="form-button" type="submit" value="submit">Submit</button>
        </form>

      </section>
    )
  }


}

export default withRouter(SessionForm);
