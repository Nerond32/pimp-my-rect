import React from 'react';
import PropTypes from 'prop-types';
import Rectangle from 'components/generic/Rectangle/Rectangle';
import './Output.scss';

const Output = ({ borderSize, color, height, width }) => {
  return (
    <div className="output">
      <Rectangle
        borderSize={borderSize}
        color={color}
        height={height}
        width={width}
      />
    </div>
  );
};

Output.propTypes = {
  borderSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

export default Output;
