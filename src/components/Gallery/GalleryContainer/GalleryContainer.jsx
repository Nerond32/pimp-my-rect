import React, { memo } from 'react';
import PropTypes from 'prop-types';
import filterRectsBy from 'utils/filterRectsBy';
import sortRectsBy from 'utils/sortRectsBy';
import GalleryItem from './GalleryItem/GalleryItem';

export const GalleryContainer = ({
  rects,
  deleteImage,
  filterBy,
  sortBy,
  sortDirection,
  filterMin,
  filterMax
}) => {
  const filteredRects = filterRectsBy(rects, filterBy, filterMin, filterMax);
  const sortedRects = sortRectsBy(filteredRects, sortBy, sortDirection);
  return (
    <div className="gallery__container">
      {sortedRects.map(rect => {
        return (
          <div className="container__item" key={rect.id}>
            <GalleryItem rect={rect} deleteImage={deleteImage} />
          </div>
        );
      })}
    </div>
  );
};

GalleryContainer.propTypes = {
  rects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      borderSize: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired
    })
  ).isRequired,
  deleteImage: PropTypes.func.isRequired,
  filterBy: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  sortDirection: PropTypes.string.isRequired,
  filterMin: PropTypes.number.isRequired,
  filterMax: PropTypes.number.isRequired
};

export default memo(GalleryContainer);
