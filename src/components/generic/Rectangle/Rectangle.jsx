import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Rectangle.scss';

const Rectangle = ({ borderSize, color, size }) => {
  const rectStyle = {
    border: `solid black ${borderSize}px`,
    backgroundColor: `${color}`,
    height: `${size}px`,
    width: `${size}px`
  };
  return <div className="rectangle" style={rectStyle} />;
};

Rectangle.propTypes = {
  borderSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default memo(Rectangle);
