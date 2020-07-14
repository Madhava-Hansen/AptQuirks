import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from '@fortawesome/fontawesome-free-solid'

export const QuirkFormInput = ({
  value, 
  name,
  isTextArea, 
  update, 
  isValid = true,
  modifierClass,
  title
}) => {
  const Element = isTextArea ? 'textarea' : 'input';
  return (
    <div className="QuirkFormInput">
      <p>{title}</p>
      <Element
        className={`QuirkFormInput-input ${isTextArea ? 'QuirkFormInput-textAreaInput' : ''} ${modifierClass ? modifierClass : ''}`}
        type="text"
        onChange={update(name)}
        value={value}
      />
      {isValid && (
        <FontAwesomeIcon className="QuirkFormInput-checkmark" icon={faCheck} size="1x" />
      )}
    </div>
  )
}