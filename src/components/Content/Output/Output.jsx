import React from 'react';
import PropTypes from 'prop-types';
import Rectangle from 'components/generic/Rectangle/Rectangle';
import './Output.scss';

const Output = ({ borderSize, color, size }) => {
  return (
    <div className="output">
      <Rectangle borderSize={borderSize} color={color} size={size} />
    </div>
  );
};

Output.propTypes = {
  borderSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default Output;
