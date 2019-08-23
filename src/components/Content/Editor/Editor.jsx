import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Editor.scss';

const Editor = ({
  borderSize,
  color,
  size,
  addImage,
  changeBorderSize,
  changeColor,
  changeSize
}) => {
  return (
    <form
      className="editor"
      onSubmit={event => {
        event.preventDefault();
        addImage(borderSize, color, size);
      }}
    >
      <label htmlFor="rectColor">
        Color
        <input
          type="color"
          id="rectColor"
          name="rectColor"
          value={color}
          onChange={event => changeColor(event.target.value)}
        />
      </label>
      <label htmlFor="rectSize">
        Size
        <input
          type="range"
          id="rectSize"
          name="rectSize"
          min="100"
          max="400"
          step="10"
          value={size}
          onChange={event => changeSize(Number(event.target.value))}
        />
      </label>
      <label htmlFor="rectBorder">
        Border size
        <input
          type="range"
          id="rectBorder"
          name="rectBorder"
          min="0"
          max="20"
          value={borderSize}
          onChange={event => changeBorderSize(Number(event.target.value))}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

Editor.propTypes = {
  borderSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  addImage: PropTypes.func.isRequired,
  changeBorderSize: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired,
  changeSize: PropTypes.func.isRequired
};

export default memo(Editor);
