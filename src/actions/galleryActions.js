export const ADD_IMAGE = 'ADD_IMAGE';
export const DELETE_IMAGE = 'DELETE_IMAGE';

export const addImage = (borderSize, color, size) => {
  return { type: ADD_IMAGE, borderSize, color, size };
};

export const deleteImage = id => {
  return { type: DELETE_IMAGE, id };
};
