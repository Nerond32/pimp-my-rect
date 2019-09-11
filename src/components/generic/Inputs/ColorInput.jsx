import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ColorInput = ({ displayName, name, value, onChangeHandler }) => {
  return (
    <div className="c-color-input">
      <label className="c-color-input__label" htmlFor={name}>
        {displayName}
      </label>
      <div className="c-color-input__field">
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
