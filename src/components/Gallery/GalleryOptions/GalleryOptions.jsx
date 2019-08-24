import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TextInput from 'components/generic/Input/TextInput/TextInput';
import './GalleryOptions.scss';

const GalleryOptions = ({ onChange }) => {
  return (
    <form className="gallery-options-form">
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
      <div className="filter">
        Filter by{' '}
        <select
          defaultValue="filter"
          name="filter"
          onChange={event => onChange(event.target.value)}
        >
          <option value="size">Size</option>
          <option value="borderSize">Border size</option>
        </select>
      </div>
      <span className="filter-inputs">
        <TextInput
          id="min"
          name="min"
          label="Min"
          value="0"
          onChange={() => {}}
        />
        <TextInput
          id="max"
          name="max"
          label="Max"
          value="100"
          onChange={() => {}}
        />
      </span>
    </form>
  );
};

GalleryOptions.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default memo(GalleryOptions);
