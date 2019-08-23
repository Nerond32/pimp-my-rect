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
    <label htmlFor={name} className="input">
      {displayName}
      <div className="input-right">
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
    </label>
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
