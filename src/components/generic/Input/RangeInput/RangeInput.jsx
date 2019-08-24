import React, { memo } from 'react';
import PropTypes from 'prop-types';
import '../Input.scss';

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
    <div className="input">
      <label htmlFor={name}>{displayName}</label>
      <div className="input-field">
        <input
          type="range"
          id={name}
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={event => onChangeHandler(Number(event.target.value))}
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
