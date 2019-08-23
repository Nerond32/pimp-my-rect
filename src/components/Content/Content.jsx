import React, { memo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeBorderSize, changeColor, changeSize } from 'actions/rectActions';
import './Content.scss';
import Editor from './Editor/Editor';
import Gallery from './Gallery/Gallery';
import Output from './Output/Output';

const Content = ({
  borderSize,
  color,
  size,
  changeBorderSize,
  changeColor,
  changeSize
}) => {
  return (
    <div className="content">
      <Editor
        borderSize={borderSize}
        color={color}
        size={size}
        changeBorderSize={changeBorderSize}
        changeColor={changeColor}
        changeSize={changeSize}
      />
      <Output borderSize={borderSize} color={color} size={size} />
      <Gallery />
    </div>
  );
};

Content.propTypes = {
  borderSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  changeBorderSize: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired,
  changeSize: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  borderSize: state.rect.borderSize,
  color: state.rect.color,
  size: state.rect.size
});

const mapDispatchToProps = dispatch => ({
  changeBorderSize: borderSize => dispatch(changeBorderSize(borderSize)),
  changeColor: color => dispatch(changeColor(color)),
  changeSize: size => dispatch(changeSize(size))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Content));
