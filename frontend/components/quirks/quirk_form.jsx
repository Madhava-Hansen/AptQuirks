import React from 'react';
import { withRouter } from 'react-router-dom';

class QuirkForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {title: "", body: "", apt_number: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillMount() {
    if (this.props.apartmentId) {
      return;
    } else {
      this.apartmentId = this.props.location.pathname.split("/").pop();
     }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.apartmentId) {
      const { currentUser } = this.props;
      this.apartmentId = this.props.apartmentId;
    } else {
      const { currentUser } = this.props;
    }
    const currentState = this.state;
    
    const userPic = currentUser.thumbnail_url ? currentUser.thumbnail_url : "http://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png"
    const idsAndPic = { apartment_id: this.apartmentId, user_id: currentUser.id, user_name: currentUser.username, user_pic: userPic };
    const quirk = { quirk: Object.assign(currentState, idsAndPic) };
    this.props.addQuirk(quirk).then(
      this.props.history.replace(`/apartments/${this.apartmentId}`)
    );
  }

  update(type) {
    return e => this.setState({
      [type]: e.currentTarget.value
    });
  }
  render() {
    let classNames = "form-container containers";

    return (
      <section className={classNames}>
        <form onSubmit={this.handleSubmit} className="form">
          <h1>Add Quirk</h1>
          <label id="form-label">Title
            <input
              id="quirk-form-title"
              className="form-input"
              type="text"
              onChange={this.update("title")}
            />
          </label>
          <br/>
          <label>Body
            <textarea
              id="quirk-form-body"
              className="form-input"
              type="text"
              onChange={this.update("body")}
            />
          </label>
          <br/>
          <label id="form-label">Apt
            <input
              id="quirk-form-apt-number"
              className="form-input"
              type="text"
              onChange={this.update("apt_number")}
            />
          </label>
          <br/>
          <button type="submit">Add Quirk</button>
        </form>
        </section>
    )
  }
}

export default withRouter(QuirkForm);
