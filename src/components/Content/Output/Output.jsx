import React from 'react';
import PropTypes from 'prop-types';
import './Output.scss';

const Output = ({ borderSize, color, size }) => {
  const rectStyle = {
    border: `solid black ${borderSize}px`,
    backgroundColor: `${color}`,
    height: `${size}px`,
    width: `${size}px`
  };
  return (
    <div className="output">
      <div className="rectangle" style={rectStyle} />
    </div>
  );
};

Output.propTypes = {
  borderSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default Output;
