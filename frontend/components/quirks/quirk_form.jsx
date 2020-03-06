import React from 'react';
import {withRouter} from 'react-router-dom';

class QuirkForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "", 
      body: "", 
      apt_number: ""
    };
    this.defaultThumbnailUrl = 
    "https://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png";
  }

  componentDidMount() {
    this.apartmentId = this.props.apartmentId || sessionStorage.getItem('apartmentId');
  }

  handleSubmit = e => {
    e.preventDefault();
    const {currentUser: {id, username, thumbnail_url}, addQuirk, history} = this.props;
    const idsAndPic = {
      apartment_id: this.apartmentId, 
      user_id: id, 
      user_name: username, 
      user_pic: thumbnail_url ? thumbnail_url : this.defaultThumbnailUrl 
    };
    addQuirk({quirk: {...this.state, ...idsAndPic}}).then(
      history.replace(`/apartments/${this.apartmentId}`)
    );
  }

  update = type => e => this.setState({[type]: e.currentTarget.value});

  render() {
    return (
      <section className="form-container containers">
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
