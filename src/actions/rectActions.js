export const CHANGE_BORDER_SIZE = 'CHANGE_BORDER_SIZE';
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const CHANGE_SIZE = 'CHANGE_SIZE';

export const changeBorderSize = borderSize => {
  return { type: CHANGE_BORDER_SIZE, borderSize };
};

export const changeColor = color => {
  return { type: CHANGE_COLOR, color };
};

export const changeSize = size => {
  return { type: CHANGE_SIZE, size };
};
