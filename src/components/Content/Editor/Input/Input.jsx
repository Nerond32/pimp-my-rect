import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/generic/Button/Button';
import ColorInput from 'components/generic/Input/ColorInput/ColorInput';
import RangeInput from 'components/generic/Input/RangeInput/RangeInput';
import './Input.scss';

const Input = ({
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
      className="editor-input-form"
      onSubmit={event => {
        event.preventDefault();
        addImage(borderSize, color, height, width);
      }}
    >
      <ColorInput
        displayName="Color:"
        name="color"
        value={color}
        onChangeHandler={changeColor}
      />
      <RangeInput
        min={10}
        max={200}
        step={5}
        displayName="Height:"
        name="rectHeight"
        value={height}
        onChangeHandler={changeHeight}
      />
      <RangeInput
        min={10}
        max={200}
        step={5}
        displayName="Width:"
        name="rectWidth"
        value={width}
        onChangeHandler={changeWidth}
      />
      <RangeInput
        min={1}
        max={20}
        displayName="Border size:"
        name="rectBorder"
        value={borderSize}
        onChangeHandler={changeBorderSize}
      />
      <Button type="submit">Save</Button>
    </form>
  );
};

Input.propTypes = {
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

export default memo(Input);
