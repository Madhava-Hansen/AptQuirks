import React from 'react';

class QuirkForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {title: "", body: "", apt_number: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }


  handleSubmit(e) {
    debugger;
    e.preventDefault();
    const titleInput = document.getElementById("quirk-form-title");
    const bodyInput = document.getElementById("quirk-form-body");
    const aptNumberInput = document.getElementById("quirk-form-apt-number");
    const currentState = this.state;
    const { username } = this.props;
    const ids = { apartment_id: this.props.apartment_id, user_id: this.props.user_id, user_name: username };
    const quirk = { quirk: Object.assign(currentState, ids) };
    this.props.addQuirk(quirk).then(
      quirk => this.setState({ title: quirk.title, body: quirk.body, apt_number: quirk.apt_number }),
      titleInput.value = "",
      bodyInput.value = "",
      aptNumberInput.value = ""
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
            <textarea
              id="quirk-form-body"
              type="text"
              onChange={this.update("body")}
            />
          </label>
          <br/>
          <label>Apt number
            <input
              id="quirk-form-apt-number"
              type="text"
              onChange={this.update("apt_number")}
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
