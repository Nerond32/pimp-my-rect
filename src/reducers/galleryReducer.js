import generateUniqueHash from 'utils/generateUniqueHash';
import {
  ADD_IMAGE,
  DELETE_IMAGE,
  CHANGE_FILTER_BY,
  CHANGE_SORT_BY,
  CHANGE_SORT_DIRECTION,
  CHANGE_MIN_FILTER_VALUE,
  CHANGE_MAX_FILTER_VALUE
} from 'actions/galleryActions';

export const initialState = {
  rects: [],
  filterBy: 'size',
  sortBy: 'size',
  filterMin: NaN,
  filterMax: NaN,
  sortDirection: 'DESC'
};

const galleryReducer = (state = initialState, action) => {
  if (action.type === ADD_IMAGE) {
    const { borderSize, color, height, width } = action;
    const id = generateUniqueHash();
    return {
      ...state,
      rects: [...state.rects, { id, borderSize, color, height, width }]
    };
  }
  if (action.type === DELETE_IMAGE) {
    const { id } = action;
    return {
      ...state,
      rects: [...state.rects.filter(image => image.id !== id)]
    };
  }
  if (action.type === CHANGE_FILTER_BY) {
    const { filterBy } = action;
    return {
      ...state,
      filterBy
    };
  }
  if (action.type === CHANGE_SORT_BY) {
    const { sortBy } = action;
    return {
      ...state,
      sortBy
    };
  }
  if (action.type === CHANGE_SORT_DIRECTION) {
    let sortDirection;
    if (state.sortDirection === 'DESC') {
      sortDirection = 'ASC';
    } else {
      sortDirection = 'DESC';
    }
    return {
      ...state,
      sortDirection
    };
  }
  if (action.type === CHANGE_MIN_FILTER_VALUE) {
    const { filterMin } = action;
    return {
      ...state,
      filterMin
    };
  }
  if (action.type === CHANGE_MAX_FILTER_VALUE) {
    const { filterMax } = action;
    return {
      ...state,
      filterMax
    };
  }
  return state;
};
export default galleryReducer;
