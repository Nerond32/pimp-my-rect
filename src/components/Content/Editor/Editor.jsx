import React, { memo } from 'react';
import PropTypes from 'prop-types';
import RangeInput from 'components/generic/RangeInput/RangeInput';
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
      <RangeInput
        min={100}
        max={400}
        step={10}
        displayName="Size"
        name="rectSize"
        value={size}
        onChangeHandler={changeSize}
      />
      <RangeInput
        min={1}
        max={20}
        displayName="Border size"
        name="rectBorder"
        value={borderSize}
        onChangeHandler={changeBorderSize}
      />
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
