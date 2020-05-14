import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from '@fortawesome/fontawesome-free-solid'

export const Checkbox = props => {
  return (
    <div 
    onClick={props.handleClick}
    className={`Checkbox ${props.isActive ? 'Checkbox-isChecked' : ''}`}>
    {props.isActive && (
      <FontAwesomeIcon 
        className="Checkbox-checkMarkIcon" 
        size="1x" 
        icon={faCheck}
      />
    )}
  </div>
  )
}