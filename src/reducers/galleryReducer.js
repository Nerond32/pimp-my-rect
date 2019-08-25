import generateUniqueHash from 'utils/generateUniqueHash';
import {
  ADD_IMAGE,
  DELETE_IMAGE,
  CHANGE_FILTER_BY,
  CHANGE_SORT_BY,
  CHANGE_SORT_DIRECTION
} from 'actions/galleryActions';

export const initialState = {
  rects: [],
  filterBy: '',
  sortBy: 'size',
  filterMin: 10,
  filterMax: 10000,
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
  return state;
};
export default galleryReducer;
