import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/generic/Button/Button';
import Rectangle from 'components/generic/Rectangle/Rectangle';
import filterRectsBy from 'utils/filterRectsBy';
import sortRectsBy from 'utils/sortRectsBy';
import './GalleryContainer.scss';

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
    <div className="gallery-container">
      {sortedRects.map(image => {
        const { id, borderSize, color, height, width } = image;
        return (
          <div className="gallery-item" key={id}>
            <span className="size">
              {2 * borderSize + image.width}x{2 * borderSize + image.height}
            </span>
            <div className="rect-container">
              <Rectangle
                borderSize={borderSize}
                color={color}
                height={height}
                width={width}
              />
            </div>
            <Button onClick={() => deleteImage(id)}>X</Button>
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
