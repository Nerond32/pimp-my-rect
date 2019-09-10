import React, { memo } from 'react';
import PropTypes from 'prop-types';

const RangeInput = ({
  min,
  max,
  step,
  displayName,
  name,
  value,
  onChangeHandler
}) => {
  return (
    <div className="pmr-input">
      <label className="pmr-input__label" htmlFor={name}>
        {displayName}
      </label>
      <div className="pmr-input__field">
        <input
          type="range"
          id={name}
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={event => onChangeHandler(event)}
        />
        <span>{value}</span>
      </div>
    </div>
  );
};

RangeInput.defaultProps = {
  step: 1
};

RangeInput.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  displayName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

export default memo(RangeInput);
