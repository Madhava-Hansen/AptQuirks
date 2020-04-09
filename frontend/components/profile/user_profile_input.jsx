import React from 'react';

export const UserProfileInput = ({
  type, 
  update, 
  handleUpdateUser, 
  value
}) => {
    return (
      <div className="UserProfileInput-inputWrapper">
        <input
          className="UserProfileInput-formInput"
          placeholder={`enter ${type}...`}
          onChange={update}
          value={value}
          name={type}
          type="text"
        ></input>
        <button
          className="UserProfileInput-saveButton"
          onClick={handleUpdateUser}
          name={type}
        >
          Save
        </button>
      </div>
  )
}