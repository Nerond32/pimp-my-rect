import React, { memo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addImage,
  deleteImage,
  changeFilterBy,
  changeSortBy
} from 'actions/galleryActions';
import {
  changeBorderSize,
  changeColor,
  changeHeight,
  changeWidth
} from 'actions/rectActions';
import './Content.scss';
import Editor from './Editor/Editor';
import Gallery from './Gallery/Gallery';
import Output from './Output/Output';

const Content = ({
  borderSize,
  color,
  height,
  width,
  images,
  addImage,
  deleteImage,
  changeFilterBy,
  changeSortBy,
  changeBorderSize,
  changeColor,
  changeHeight,
  changeWidth,
  filterBy,
  sortBy
}) => {
  return (
    <div className="content">
      <Editor
        borderSize={borderSize}
        color={color}
        height={height}
        width={width}
        addImage={addImage}
        changeBorderSize={changeBorderSize}
        changeColor={changeColor}
        changeHeight={changeHeight}
        changeWidth={changeWidth}
      />
      <Output
        borderSize={borderSize}
        color={color}
        height={height}
        width={width}
      />
      <Gallery
        images={images}
        deleteImage={deleteImage}
        changeFilterBy={changeFilterBy}
        changeSortBy={changeSortBy}
        filterBy={filterBy}
        sortBy={sortBy}
      />
    </div>
  );
};

Content.propTypes = {
  borderSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      borderSize: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired
    })
  ).isRequired,
  addImage: PropTypes.func.isRequired,
  deleteImage: PropTypes.func.isRequired,
  changeFilterBy: PropTypes.func.isRequired,
  changeSortBy: PropTypes.func.isRequired,
  changeBorderSize: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired,
  changeHeight: PropTypes.func.isRequired,
  changeWidth: PropTypes.func.isRequired,
  filterBy: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  borderSize: state.rect.borderSize,
  color: state.rect.color,
  height: state.rect.height,
  width: state.rect.width,
  images: state.gallery.images,
  filterBy: state.gallery.filterBy,
  sortBy: state.gallery.sortBy
});

const mapDispatchToProps = dispatch => ({
  addImage: (borderSize, color, height, width) =>
    dispatch(addImage(borderSize, color, height, width)),
  deleteImage: id => dispatch(deleteImage(id)),
  changeFilterBy: filterBy => dispatch(changeFilterBy(filterBy)),
  changeSortBy: sortBy => dispatch(changeSortBy(sortBy)),
  changeBorderSize: borderSize => dispatch(changeBorderSize(borderSize)),
  changeColor: color => dispatch(changeColor(color)),
  changeHeight: height => dispatch(changeHeight(height)),
  changeWidth: width => dispatch(changeWidth(width))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Content));
