import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from '@fortawesome/fontawesome-free-solid'

export const QuirkFormInput = ({
  value, 
  name,
  isTextArea, 
  placeholder, 
  update, 
  isValid = true
}) => {
  const Element = isTextArea ? 'textarea' : 'input';
  return (
    <div className="QuirkForm-inputWrapper">
      <Element
        className={`QuirkForm-input ${isTextArea && 'QuirkForm-textAreaInput'}`}
        type="text"
        placeholder={placeholder}
        onChange={update(name)}
        value={value}
      />
      {isValid && (
        <FontAwesomeIcon className="QuirkForm-checkmark" icon={faCheck} size="1x" />
      )}
    </div>
  )
}