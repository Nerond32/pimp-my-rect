import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  minHeight,
  maxHeight,
  stepHeight,
  minWidth,
  maxWidth,
  stepWidth,
  minBorderSize,
  maxBorderSize,
  borderStep
} from 'assets/constants';
import Button from 'components/generic/Button/Button';
import ColorInput from 'components/generic/Input/ColorInput/ColorInput';
import RangeInput from 'components/generic/Input/RangeInput/RangeInput';
import './Input.scss';

const Input = ({
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
    <form
      className="editor-input-form"
      onSubmit={event => {
        event.preventDefault();
        addImage(borderSize, borderColor, color, height, width);
      }}
    >
      <ColorInput
        displayName="Border color:"
        name="borderColor"
        value={borderColor}
        onChangeHandler={changeBorderColor}
      />
      <ColorInput
        displayName="Color:"
        name="color"
        value={color}
        onChangeHandler={changeColor}
      />
      <RangeInput
        min={minHeight}
        max={maxHeight}
        step={stepHeight}
        displayName="Height:"
        name="rectHeight"
        value={height}
        onChangeHandler={changeHeight}
      />
      <RangeInput
        min={minWidth}
        max={maxWidth}
        step={stepWidth}
        displayName="Width:"
        name="rectWidth"
        value={width}
        onChangeHandler={changeWidth}
      />
      <RangeInput
        min={minBorderSize}
        max={maxBorderSize}
        step={borderStep}
        displayName="Border size:"
        name="rectBorder"
        value={borderSize}
        onChangeHandler={changeBorderSize}
      />
      <Button classNames="save-button" type="submit">
        Save
      </Button>
    </form>
  );
};

Input.propTypes = {
  borderSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  addImage: PropTypes.func.isRequired,
  changeBorderSize: PropTypes.func.isRequired,
  changeBorderColor: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired,
  changeHeight: PropTypes.func.isRequired,
  changeWidth: PropTypes.func.isRequired
};

export default memo(Input);
