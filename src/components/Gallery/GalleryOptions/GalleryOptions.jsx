import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { filteringOptions, sortingOptions } from 'assets/constants';
import Button from 'components/generic/Button/Button';
import TextInput from 'components/generic/Inputs/TextInput';

const GalleryOptions = ({
  changeGalleryOptions,
  filterMin,
  filterMax,
  sortDirection
}) => {
  const changeSortDirection = () =>
    changeGalleryOptions({
      sortDirection: sortDirection === 'ASC' ? 'DESC' : 'ASC'
    });
  const updateField = ({ target: { name, value } }) =>
    changeGalleryOptions({ [name]: value });
  const updateNumericField = ({ target: { name, value } }) =>
    changeGalleryOptions({ [name]: Number(value) });
  return (
    <form className="c-gallery-options">
      <div className="c-gallery-options__sort-by">
        Sort by{' '}
        <select defaultValue="size" name="sortBy" onChange={updateField}>
          {sortingOptions.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.displayName}
              </option>
            );
          })}
        </select>
        <Button onClick={changeSortDirection}>{sortDirection}</Button>
      </div>
      <div className="c-gallery-options__filter-by">
        Filter by{' '}
        <select defaultValue="filterBy" name="filterBy" onChange={updateField}>
          {filteringOptions.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.displayName}
              </option>
            );
          })}
        </select>
      </div>
      <div className="c-gallery-options__filter-inputs">
        <TextInput
          id="filterMin"
          name="filterMin"
          label="Min"
          value={filterMin ? filterMin.toString() : ''}
          onChangeHandler={updateNumericField}
        />
        <TextInput
          id="filterMax"
          name="filterMax"
          label="Max"
          value={filterMax ? filterMax.toString() : ''}
          onChangeHandler={updateNumericField}
        />
      </div>
    </form>
  );
};

GalleryOptions.propTypes = {
  changeGalleryOptions: PropTypes.func.isRequired,
  filterMin: PropTypes.number.isRequired,
  filterMax: PropTypes.number.isRequired,
  sortDirection: PropTypes.string.isRequired
};

export default memo(GalleryOptions);
