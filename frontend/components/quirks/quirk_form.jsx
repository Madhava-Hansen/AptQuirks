import React from "react";
import { withRouter } from "react-router-dom";
import {QuirkFormInput} from './quirk_form_input';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from '@fortawesome/fontawesome-free-solid'

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

  update = type => e => this.setState({ [type]: e.currentTarget.value });

  render() {
    const {title, body, apt_number} = this.state;
    return (
      <div className="QuirkForm">
        <FontAwesomeIcon 
          className="QuirkForm-closeFormIcon"
          size="2x" 
          icon={faTimesCircle} 
          onClick={this.props.handleHideQuirkForm}
        />
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
        <button 
          className="QuirkForm-button form-button"
          onClick={() => this.props.handleAddQuirk(title, body, apt_number)}>
          Submit
        </button>
      </div>
    );
  }
}

export default withRouter(QuirkForm);
