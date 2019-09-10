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
import ColorInput from 'components/generic/Inputs/ColorInput';
import RangeInput from 'components/generic/Inputs/RangeInput';

const Input = ({
  borderSize,
  borderColor,
  color,
  height,
  width,
  addImage,
  updateRect
}) => {
  const updateField = ({ target: { name, value } }) =>
    updateRect({ [name]: value });
  const updateNumericField = ({ target: { name, value } }) =>
    updateRect({ [name]: Number(value) });
  return (
    <form
      className="input__form"
      onSubmit={event => {
        event.preventDefault();
        addImage({ borderSize, borderColor, color, height, width });
      }}
    >
      <ColorInput
        displayName="Border color:"
        name="borderColor"
        value={borderColor}
        onChangeHandler={updateField}
      />
      <ColorInput
        displayName="Color:"
        name="color"
        value={color}
        onChangeHandler={updateField}
      />
      <RangeInput
        min={minHeight}
        max={maxHeight}
        step={stepHeight}
        displayName="Height:"
        name="height"
        value={height}
        onChangeHandler={updateNumericField}
      />
      <RangeInput
        min={minWidth}
        max={maxWidth}
        step={stepWidth}
        displayName="Width:"
        name="width"
        value={width}
        onChangeHandler={updateNumericField}
      />
      <RangeInput
        min={minBorderSize}
        max={maxBorderSize}
        step={borderStep}
        displayName="Border size:"
        name="borderSize"
        value={borderSize}
        onChangeHandler={updateNumericField}
      />
      <Button classNames="form__save-button" type="submit">
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
  updateRect: PropTypes.func.isRequired
};

export default memo(Input);
