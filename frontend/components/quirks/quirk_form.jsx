import React from "react";
import { withRouter } from "react-router-dom";
import {QuirkFormInput} from './quirk_form_input';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from '@fortawesome/fontawesome-free-solid'

const QuirkForm = ({
  update,
  title, 
  body,
  apt_number,
  handleAddQuirk,
  handleHideQuirkForm,
  apartmentShow
}) => 
    <div className="QuirkForm">
      <FontAwesomeIcon 
        className="QuirkForm-closeFormIcon"
        size="2x" 
        icon={faTimesCircle} 
        onClick={handleHideQuirkForm}
      />
      <div className="QuirkForm-titleSectionWrapper">
        <h1 className="QuirkForm-title">Add Quirk</h1>
        <p>{apartmentShow.street_address}</p>
      </div>
      <QuirkFormInput 
        name="title"
        placeholder="title..."
        update={update}
        isValid={title.length >= 6}
        value={title}
      />
      <QuirkFormInput 
        name="body"
        placeholder="body..."
        isTextArea
        update={update}
        isValid={body.length >= 15}
        value={body}
      />
      <QuirkFormInput 
        name="apt_number"
        placeholder="apt..."
        update={update}
        isValid={apt_number.length >= 1}
        value={apt_number}
      />
      <button 
        className="QuirkForm-button form-button"
        onClick={() => handleAddQuirk(title, body, apt_number)}>
        Submit
      </button>
    </div>

export default withRouter(QuirkForm);
