import React, { memo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Rectangle from 'components/generic/Rectangle/Rectangle';
import { addImage } from 'actions/galleryActions';
import { updateRect } from 'actions/editorActions';

import Input from './EditorInput/EditorInput';

const Editor = ({
  borderSize,
  borderColor,
  color,
  height,
  width,
  addImage,
  updateRect
}) => {
  return (
    <>
      <div className="c-editor c-editor--input">
        <Input
          borderSize={borderSize}
          borderColor={borderColor}
          color={color}
          height={height}
          width={width}
          addImage={addImage}
          updateRect={updateRect}
        />
      </div>
      <div className="c-editor c-editor--preview">
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
  updateRect: PropTypes.func.isRequired
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
  updateRect: attributes => dispatch(updateRect(attributes))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Editor));
