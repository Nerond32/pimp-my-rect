import React, { memo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Rectangle from 'components/generic/Rectangle/Rectangle';
import { addImage } from 'actions/galleryActions';
import {
  changeBorderSize,
  changeBorderColor,
  changeColor,
  changeHeight,
  changeWidth
} from 'actions/editorActions';
import './Editor.scss';

import Input from './Input/Input';

const Editor = ({
  borderSize,
  borderColor,
  color,
  height,
  width,
  addImage,
  changeBorderSize,
  changeBorderColor,
  changeColor,
  changeHeight,
  changeWidth
}) => {
  return (
    <>
      <div className="editor editor-input">
        <Input
          borderSize={borderSize}
          borderColor={borderColor}
          color={color}
          height={height}
          width={width}
          addImage={addImage}
          changeBorderSize={changeBorderSize}
          changeBorderColor={changeBorderColor}
          changeColor={changeColor}
          changeHeight={changeHeight}
          changeWidth={changeWidth}
        />
      </div>
      <div className="editor editor-preview">
        <Rectangle
          borderSize={borderSize}
          borderColor={borderColor}
          color={color}
          height={height}
          width={width}
        />
      </div>
    </>
  );
};

Editor.propTypes = {
  borderSize: PropTypes.number.isRequired,
  borderColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  addImage: PropTypes.func.isRequired,
  changeBorderSize: PropTypes.func.isRequired,
  changeBorderColor: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired,
  changeHeight: PropTypes.func.isRequired,
  changeWidth: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  borderSize: state.editor.borderSize,
  borderColor: state.editor.borderColor,
  color: state.editor.color,
  height: state.editor.height,
  width: state.editor.width
});

const mapDispatchToProps = dispatch => ({
  addImage: (borderSize, borderColor, color, height, width) =>
    dispatch(addImage(borderSize, borderColor, color, height, width)),
  changeBorderSize: borderSize => dispatch(changeBorderSize(borderSize)),
  changeBorderColor: borderColor => dispatch(changeBorderColor(borderColor)),
  changeColor: color => dispatch(changeColor(color)),
  changeHeight: height => dispatch(changeHeight(height)),
  changeWidth: width => dispatch(changeWidth(width))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Editor));
