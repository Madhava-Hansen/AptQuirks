import React from 'react';

export const SessionFormInput = ({name, update, type}) =>
  <input
    className="SessionForm-input form-input"
    type="text"
    placeholder={`${name}...`}
    onChange={update(name)}
    type={type}
  />