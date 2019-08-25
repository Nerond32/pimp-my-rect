import React, { memo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  deleteImage,
  changeFilterBy,
  changeSortBy,
  changeSortDirection
} from 'actions/galleryActions';
import Button from 'components/generic/Button/Button';
import Rectangle from 'components/generic/Rectangle/Rectangle';
import filterRectsBy from 'utils/filterRectsBy';
import sortRectsBy from 'utils/sortRectsBy';
import GalleryOptions from './GalleryOptions/GalleryOptions';
import './Gallery.scss';

export const Gallery = ({
  rects,
  deleteImage,
  changeFilterBy,
  changeSortBy,
  changeSortDirection,
  filterBy,
  sortBy,
  sortDirection,
  filterMin,
  filterMax
}) => {
  const filteredRects = filterRectsBy(rects, filterBy, filterMin, filterMax);
  const sortedRects = sortRectsBy(filteredRects, sortBy, sortDirection);
  return (
    <div className="gallery">
      <h2>Your saved pimp&apos;d rects</h2>
      <GalleryOptions
        changeFilterBy={changeFilterBy}
        changeSortBy={changeSortBy}
        changeSortDirection={changeSortDirection}
        sortDirection={sortDirection}
      />
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
    </div>
  );
};

Gallery.propTypes = {
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
  changeFilterBy: PropTypes.func.isRequired,
  changeSortBy: PropTypes.func.isRequired,
  changeSortDirection: PropTypes.func.isRequired,
  filterBy: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  sortDirection: PropTypes.string.isRequired,
  filterMin: PropTypes.number.isRequired,
  filterMax: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  rects: state.gallery.rects,
  filterBy: state.gallery.filterBy,
  sortBy: state.gallery.sortBy,
  filterMin: state.gallery.filterMin,
  filterMax: state.gallery.filterMax,
  sortDirection: state.gallery.sortDirection
});

const mapDispatchToProps = dispatch => ({
  deleteImage: id => dispatch(deleteImage(id)),
  changeFilterBy: filterBy => dispatch(changeFilterBy(filterBy)),
  changeSortBy: sortBy => dispatch(changeSortBy(sortBy)),
  changeSortDirection: () => dispatch(changeSortDirection())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Gallery));
