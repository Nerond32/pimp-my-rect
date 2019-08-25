export const ADD_IMAGE = 'ADD_IMAGE';
export const DELETE_IMAGE = 'DELETE_IMAGE';
export const CHANGE_FILTER_BY = 'CHANGE_FILTER_BY';
export const CHANGE_SORT_BY = 'CHANGE_SORT_BY';
export const CHANGE_SORT_DIRECTION = 'CHANGE_SORT_DIRECTION';

export const addImage = (borderSize, color, height, width) => {
  return { type: ADD_IMAGE, borderSize, color, height, width };
};

export const deleteImage = id => {
  return { type: DELETE_IMAGE, id };
};

export const changeFilterBy = filterBy => {
  return { type: CHANGE_FILTER_BY, filterBy };
};

export const changeSortBy = sortBy => {
  return { type: CHANGE_SORT_BY, sortBy };
};

export const changeSortDirection = () => {
  return { type: CHANGE_SORT_DIRECTION };
};
