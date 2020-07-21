import React from 'react';

export const UserProfileInput = ({
  type, 
  update, 
  value
}) => {
    return (
      <input
        className="UserProfileInput-formInput"
        onChange={update}
        value={value || ''}
        name={type}
        type="text"
      ></input>
  )
}