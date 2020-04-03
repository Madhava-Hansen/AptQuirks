import React from 'react';

export const SessionFormInput = ({name, update}) =>
  <input
    className="SessionForm-input form-input"
    type="text"
    placeholder={`${name}...`}
    onChange={update(name)}
  />