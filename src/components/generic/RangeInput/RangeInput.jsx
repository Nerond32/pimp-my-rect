import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './RangeInput.scss';

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
    <label htmlFor={name}>
      {displayName}
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
