import React from 'react';
import PropTypes from 'prop-types';

const Sort = ({ onChange }) => {
  return (
    <div className="sort">
      Sort by{' '}
      <select
        defaultValue="size"
        name="sort"
        onChange={event => onChange(event.target.value)}
      >
        <option value="size">Size</option>
        <option value="borderSize">Border size</option>
      </select>
    </div>
  );
};

Sort.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Sort;
