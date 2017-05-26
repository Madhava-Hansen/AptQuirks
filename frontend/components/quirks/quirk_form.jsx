import React from 'react';

class QuirkForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {title: "", body: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const currentState = this.state;
    const ids = { apartment_id: this.props.apartment_id, user_id: this.props.user_id};
    const quirk = { quirk: Object.assign(currentState, ids) };
    this.props.addQuirk(quirk).then(
      console.log("add quirk success")
    );
  }

  update(type) {
    return e => this.setState({
      [type]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Add Quirk</h1>
          <label>Title
            <input
              type="text"
              onChange={this.update("title")}
            />
          </label>
          <br/>
          <label>Body
            <input
              type="text"
              onChange={this.update("body")}
            />
          </label>
          <br/>
          <button type="submit">Add Quirk</button>
        </form>
      </div>
    )
  }
}

export default QuirkForm;
