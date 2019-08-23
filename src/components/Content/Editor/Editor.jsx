import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/generic/Button/Button';
import RangeInput from 'components/generic/RangeInput/RangeInput';
import './Editor.scss';

const Editor = ({
  borderSize,
  color,
  height,
  width,
  addImage,
  changeBorderSize,
  changeColor,
  changeHeight,
  changeWidth
}) => {
  return (
    <form
      className="editor"
      onSubmit={event => {
        event.preventDefault();
        console.log(width);
        addImage(borderSize, color, height, width);
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
        min={10}
        max={250}
        step={5}
        displayName="Height"
        name="rectHeight"
        value={height}
        onChangeHandler={changeHeight}
      />
      <RangeInput
        min={10}
        max={250}
        step={5}
        displayName="Width"
        name="rectWidth"
        value={width}
        onChangeHandler={changeWidth}
      />
      <RangeInput
        min={1}
        max={20}
        displayName="Border size"
        name="rectBorder"
        value={borderSize}
        onChangeHandler={changeBorderSize}
      />
      <Button type="submit">Save</Button>
    </form>
  );
};

Editor.propTypes = {
  borderSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  addImage: PropTypes.func.isRequired,
  changeBorderSize: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired,
  changeHeight: PropTypes.func.isRequired,
  changeWidth: PropTypes.func.isRequired
};

export default memo(Editor);
