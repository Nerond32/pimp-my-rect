import React, { memo } from 'react';
import './Editor.scss';

const Editor = () => {
  return (
    <form className="editor">
      <label htmlFor="rectColor">
        Color
        <input type="color" id="rectColor" name="rectColor" />
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
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default memo(Editor);
