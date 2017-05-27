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
    const titleInput = document.getElementById("quirk-form-title");
    const bodyInput = document.getElementById("quirk-form-body");
    const currentState = this.state;
    const ids = { apartment_id: this.props.apartment_id, user_id: this.props.user_id};
    const quirk = { quirk: Object.assign(currentState, ids) };
    this.props.addQuirk(quirk).then(
      quirk => this.setState({ title: quirk.title, body: quirk.body }),
      titleInput.value = "",
      bodyInput.value = ""
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
              id="quirk-form-title"
              type="text"
              onChange={this.update("title")}
            />
          </label>
          <br/>
          <label>Body
            <input
              id="quirk-form-body"
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
