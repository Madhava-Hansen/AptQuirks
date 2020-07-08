import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from '@fortawesome/fontawesome-free-solid'

export const SessionFormInput = ({name, update, type, isValid, modifierClass, checkmarkModifierClass}) =>
  <div className="SessionForm-inputWrapper">
    <input
      className={`SessionForm-input form-input ${modifierClass}`}
      type="text"
      placeholder={`${name}...`}
      onChange={update(name)}
      type={type}
    />
    {isValid && (
      <FontAwesomeIcon className={`SessionForm-checkmark ${checkmarkModifierClass}`} icon={faCheck} size="1x" />
    )}
  </div>