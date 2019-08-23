export const ADD_IMAGE = 'ADD_IMAGE';
export const DELETE_IMAGE = 'DELETE_IMAGE';

export const addImage = (borderSize, color, height, width) => {
  return { type: ADD_IMAGE, borderSize, color, height, width };
};

export const deleteImage = id => {
  return { type: DELETE_IMAGE, id };
};
