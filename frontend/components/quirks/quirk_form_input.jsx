import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from '@fortawesome/fontawesome-free-solid'

export const QuirkFormInput = ({
  value, 
  name,
  isTextArea, 
  placeholder, 
  update, 
  isValid = true,
  modifierClass
}) => {
  const Element = isTextArea ? 'textarea' : 'input';
  return (
    <div className="QuirkFormInput">
      <Element
        className={`QuirkFormInput-input ${isTextArea && 'QuirkFormInput-textAreaInput'} ${modifierClass}`}
        type="text"
        placeholder={placeholder}
        onChange={update(name)}
        value={value}
      />
      {isValid && (
        <FontAwesomeIcon className="QuirkFormInput-checkmark" icon={faCheck} size="1x" />
      )}
    </div>
  )
}