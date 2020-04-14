import React from "react";
import { withRouter } from "react-router-dom";
import {QuirkFormInput} from './quirk_form_input';

class QuirkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      apt_number: "",
    };
    this.defaultThumbnailUrl =
      "https://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png";
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.apartmentId =
      this.props.apartmentId || sessionStorage.getItem("apartmentId");
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      currentUser: { id, username, thumbnail_url },
      addQuirk,
      history,
    } = this.props;
    const idsAndPic = {
      apartment_id: this.apartmentId,
      user_id: id,
      user_name: username,
      user_pic: thumbnail_url ? thumbnail_url : this.defaultThumbnailUrl,
    };
    addQuirk({ quirk: { ...this.state, ...idsAndPic } }).then(
      history.replace(`/apartments/${this.apartmentId}`)
    );
  };

  update = type => e => this.setState({ [type]: e.currentTarget.value });

  render() {
    const {title, body, apt_number} = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="QuirkForm">
        <div className="QuirkForm-titleSectionWrapper">
          <h1 className="QuirkForm-title">Add Quirk</h1>
        </div>
        <QuirkFormInput 
          name="title"
          placeholder="title..."
          update={this.update}
          isValid={title.length >= 6}
        />
        <QuirkFormInput 
          name="body"
          placeholder="body..."
          isTextArea
          update={this.update}
          isValid={body.length >= 15}
        />
        <QuirkFormInput 
          name="apt_number"
          placeholder="apt..."
          update={this.update}
          isValid={apt_number.length >= 1}
        />
        <button className="QuirkForm-button form-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default withRouter(QuirkForm);
