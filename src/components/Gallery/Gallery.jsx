import React, { memo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteImage, changeGalleryOptions } from 'actions/galleryActions';
import filterRectsBy from 'utils/filterRectsBy';
import sortRectsBy from 'utils/sortRectsBy';
import GalleryContainer from './GalleryContainer/GalleryContainer';
import GalleryOptions from './GalleryOptions/GalleryOptions';
import './Gallery.scss';

const Gallery = ({
  rects,
  deleteImage,
  changeGalleryOptions,
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
      <h2>Your pimp&apos;d rects</h2>
      <GalleryOptions
        changeGalleryOptions={changeGalleryOptions}
        filterMin={filterMin}
        filterMax={filterMax}
        sortDirection={sortDirection}
      />
      <GalleryContainer
        rects={sortedRects}
        deleteImage={deleteImage}
        filterBy={filterBy}
        sortBy={sortBy}
        sortDirection={sortDirection}
        filterMin={filterMin}
        filterMax={filterMax}
      />
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
  changeGalleryOptions: PropTypes.func.isRequired,
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
  changeGalleryOptions: settings => dispatch(changeGalleryOptions(settings))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Gallery));
