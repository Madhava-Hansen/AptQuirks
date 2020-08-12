import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from '@fortawesome/fontawesome-free-solid'

export const SweepstakesInput = ({
  value, 
  name,
  isTextArea, 
  update, 
  isValid,
  modifierClass
}) => {
  const Element = isTextArea ? 'textarea' : 'input';
  return (
    <div className="SweepstakesInput">
      <Element
        className={`SweepstakesInput-input ${isTextArea ? 'SweepstakesInput-textAreaInput' : ''} ${modifierClass}`}
        type="text"
        onChange={update(name)}
        value={value}
      />
      {isValid && (
        <FontAwesomeIcon className="SweepstakesInput-checkmark" icon={faCheck} size="1x" />
      )}
    </div>
  )
}