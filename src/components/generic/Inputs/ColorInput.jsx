import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ColorInput = ({ displayName, name, value, onChangeHandler }) => {
  return (
    <div className="pmr-input">
      <label className="pmr-input__label" htmlFor={name}>
        {displayName}
      </label>
      <div className="pmr-input__field">
        <input
          type="color"
          id={name}
          name={name}
          value={value}
          onChange={event => onChangeHandler(event)}
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
