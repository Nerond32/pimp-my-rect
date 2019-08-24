import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Rectangle = ({ borderSize, color, height, width }) => {
  const rectStyle = {
    border: `solid black ${borderSize}px`,
    backgroundColor: `${color}`,
    height: `${height}px`,
    width: `${width}px`
  };
  return <div className="rectangle" style={rectStyle} />;
};

Rectangle.propTypes = {
  borderSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

export default memo(Rectangle);
