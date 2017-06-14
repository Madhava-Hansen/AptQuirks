import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: "", currentURL: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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
    this.props.processForm({user});
  }

  update(label) {
    return e => this.setState({
			[label]: e.currentTarget.value
		});
  }

  render() {
    const { currentUser, addPhoto, formType, errors } = this.props;
    let classNames = "form-container containers"
    return (
      <section className={classNames}>
        <h3>{errors}</h3>
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>{formType}</h1>
          <label className="form-label">username
            <br/>
            <input
              className="form-input"
              type="text"
              onChange={this.update("username")}
            />
          </label>
          <br/>
          <br/>
          <label className="form-label">password
            <br/>
            <input
              className="form-input"
              type="password"
              onChange={this.update("password")}
            />
          </label>
          <br/>
          <button type="submit" value="submit">Submit</button>
        </form>
      </section>
    )
  }


}

export default withRouter(SessionForm);
