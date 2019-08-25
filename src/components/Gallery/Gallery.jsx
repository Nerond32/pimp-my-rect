import React, { memo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  deleteImage,
  changeFilterBy,
  changeSortBy
} from 'actions/galleryActions';
import Button from 'components/generic/Button/Button';
import Rectangle from 'components/generic/Rectangle/Rectangle';
import filterRectsBy from 'utils/filterRectsBy';
import sortRectsBy from 'utils/sortRectsBy';
import GalleryOptions from './GalleryOptions/GalleryOptions';
import './Gallery.scss';

export const Gallery = ({
  images,
  deleteImage,
  changeFilterBy,
  changeSortBy,
  filterBy,
  sortBy,
  filterMin,
  filterMax
}) => {
  const filteredRects = filterRectsBy(images, filterBy, filterMin, filterMax);
  const sortedRects = sortRectsBy(filteredRects, sortBy);
  return (
    <div className="gallery">
      <h2>Your saved pimp&apos;d rects</h2>
      <GalleryOptions onChange={changeSortBy} />
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
  images: PropTypes.arrayOf(
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
  filterBy: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  filterMin: PropTypes.number.isRequired,
  filterMax: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  images: state.gallery.images,
  filterBy: state.gallery.filterBy,
  sortBy: state.gallery.sortBy,
  filterMin: state.gallery.filterMin,
  filterMax: state.gallery.filterMax
});

const mapDispatchToProps = dispatch => ({
  deleteImage: id => dispatch(deleteImage(id)),
  changeFilterBy: filterBy => dispatch(changeFilterBy(filterBy)),
  changeSortBy: sortBy => dispatch(changeSortBy(sortBy))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Gallery));
