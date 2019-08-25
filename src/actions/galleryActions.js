export const ADD_IMAGE = 'ADD_IMAGE';
export const DELETE_IMAGE = 'DELETE_IMAGE';
export const CHANGE_FILTER_BY = 'CHANGE_FILTER_BY';
export const CHANGE_SORT_BY = 'CHANGE_SORT_BY';
export const CHANGE_SORT_DIRECTION = 'CHANGE_SORT_DIRECTION';
export const CHANGE_MIN_FILTER_VALUE = 'CHANGE_MIN_FILTER_VALUE';
export const CHANGE_MAX_FILTER_VALUE = 'CHANGE_MAX_FILTER_VALUE';

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

export const changeMinFilterValue = filterMin => {
  return { type: CHANGE_MIN_FILTER_VALUE, filterMin };
};

export const changeMaxFilterValue = filterMax => {
  return { type: CHANGE_MAX_FILTER_VALUE, filterMax };
};
