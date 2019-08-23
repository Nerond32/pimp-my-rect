export const CHANGE_BORDER_SIZE = 'CHANGE_BORDER_SIZE';
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const CHANGE_HEIGHT = 'CHANGE_HEIGHT';
export const CHANGE_WIDTH = 'CHANGE_WIDTH';

export const changeBorderSize = borderSize => {
  return { type: CHANGE_BORDER_SIZE, borderSize };
};

export const changeColor = color => {
  return { type: CHANGE_COLOR, color };
};

export const changeHeight = height => {
  return { type: CHANGE_HEIGHT, height };
};

export const changeWidth = width => {
  return { type: CHANGE_WIDTH, width };
};
