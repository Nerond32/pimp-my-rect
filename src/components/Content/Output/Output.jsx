import React from 'react';
import PropTypes from 'prop-types';

const Output = ({ borderSize, color, size }) => {
  return (
    <div className="output">
      <div />
    </div>
  );
};

Output.propTypes = {
  borderSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default Output;
