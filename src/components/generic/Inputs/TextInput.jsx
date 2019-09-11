import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ fullWidth, label, id, name, onChangeHandler, value }) => {
  return (
    <div
      className={`c-text-input ${fullWidth ? 'c-text-input--full-width' : ''}`}
    >
      {label && (
        <label className="c-text-input__label" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className="c-text-input__field"
        type="text"
        id={id}
        name={name}
        onChange={event => onChangeHandler(event)}
        value={value}
      />
    </div>
  );
};

TextInput.defaultProps = {
  fullWidth: false,
  label: ''
};

TextInput.propTypes = {
  fullWidth: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default TextInput;
