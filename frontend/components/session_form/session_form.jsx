import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: "", currentURL: ""}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.history.push("/");
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
    return (
      <div>
        <h1>{this.props.formType}</h1>
        <h3>{this.props.errors}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>username
            <br/>
            <input
              type="text"
              onChange={this.update("username")}
            />
          </label>
          <br/>
          <br/>
          <label>password
            <br/>
            <input
              type="text"
              onChange={this.update("password")}
            />
          </label>
          <br/>
          <button type="submit" value="submit">Submit</button>
        </form>
      </div>
    )
  }


}

export default SessionForm;
