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
    let currentUser;
    if (this.props.apartmentId) {
      currentUser = this.props.currentUser;
      this.apartmentId = this.props.apartmentId;
    } else {
      currentUser = this.props.currentUser;
    }
    const currentState = this.state;
    const userPic = currentUser.thumbnail_url ? currentUser.thumbnail_url : "https://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png"
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
        <form onSubmit={this.handleSubmit} className="quirk-form">
          <h1 className="form-title">Add Quirk</h1>
          <p className="form-address">{this.props.currentApartment.street_address}</p>
            <input
              id="quirk-form-title"
              className="form-input"
              type="text"
              placeholder="title..."
              onChange={this.update("title")}
            />
            <textarea
              id="quirk-form-body"
              className="form-input"
              type="text"
              placeholder="body..."
              onChange={this.update("body")}
            />
            <input
              id="quirk-form-apt-number"
              className="form-input"
              type="text"
              placeholder="apt..."

              onChange={this.update("apt_number")}
            />
          <button className="form-button" type="submit">Submit</button>
        </form>
        </section>
    )
  }
}

export default withRouter(QuirkForm);
