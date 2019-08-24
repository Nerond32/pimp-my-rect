import React, { memo } from 'react';
import PropTypes from 'prop-types';
import '../Input.scss';

const ColorInput = ({ displayName, name, value, onChangeHandler }) => {
  return (
    <div className="input">
      <label htmlFor={name}>{displayName}</label>
      <div className="input-field">
        <input
          type="color"
          id={name}
          name={name}
          value={value}
          onChange={event => onChangeHandler(event.target.value)}
        />
        <span>{value}</span>
      </div>
    </div>
  );
};

ColorInput.propTypes = {
  displayName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

export default memo(ColorInput);
