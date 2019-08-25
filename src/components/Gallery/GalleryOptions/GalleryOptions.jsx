import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { filteringOptions, sortingOptions } from 'assets/constants';
import Button from 'components/generic/Button/Button';
import TextInput from 'components/generic/Input/TextInput/TextInput';
import './GalleryOptions.scss';

const GalleryOptions = ({
  changeFilterBy,
  changeSortBy,
  changeSortDirection,
  sortDirection
}) => {
  return (
    <form className="gallery-options-form">
      <div className="sort">
        Sort by{' '}
        <select
          defaultValue="size"
          name="sort"
          onChange={event => changeSortBy(event.target.value)}
        >
          {sortingOptions.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.displayName}
              </option>
            );
          })}
        </select>
        <Button onClick={() => changeSortDirection()}>{sortDirection}</Button>
      </div>
      <div className="filter">
        Filter by{' '}
        <select
          defaultValue="filter"
          name="filter"
          onChange={event => changeFilterBy(event.target.value)}
        >
          {filteringOptions.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.displayName}
              </option>
            );
          })}
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
  changeFilterBy: PropTypes.func.isRequired,
  changeSortBy: PropTypes.func.isRequired,
  changeSortDirection: PropTypes.func.isRequired,
  sortDirection: PropTypes.string.isRequired
};

export default memo(GalleryOptions);
