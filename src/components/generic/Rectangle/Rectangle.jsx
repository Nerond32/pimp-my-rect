import React, { memo, useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Rectangle = ({ borderSize, borderColor, color, height, width }) => {
  const realHeight = height + 2 * borderSize;
  const realWidth = width + 2 * borderSize;
  const rectRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    if (rectRef.current) {
      setDimensions({
        width: rectRef.current.parentElement.offsetWidth,
        height: rectRef.current.parentElement.offsetHeight
      });
    }
  }, []);
  const heightProportion = dimensions.height / realHeight;
  const widthProportion = dimensions.width / realWidth;
  let multiplier = 1;
  if (heightProportion < 1 || widthProportion < 1) {
    multiplier = Math.min(heightProportion, widthProportion);
  }
  const rectStyle = {
    backgroundColor: `${color}`,
    border: `${Math.ceil(borderSize * multiplier)}px solid ${borderColor}`,
    height: `${Math.ceil(height * multiplier)}px`,
    width: `${Math.ceil(width * multiplier)}px`
  };
  return <div ref={rectRef} className="rectangle" style={rectStyle} />;
};

Rectangle.defaultProps = {
  borderColor: '#000000'
};

Rectangle.propTypes = {
  borderSize: PropTypes.number.isRequired,
  borderColor: PropTypes.string,
  color: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

export default memo(Rectangle);
