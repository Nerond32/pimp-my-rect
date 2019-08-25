import generateUniqueHash from 'utils/generateUniqueHash';
import {
  ADD_IMAGE,
  DELETE_IMAGE,
  CHANGE_FILTER_BY,
  CHANGE_SORT_BY
} from 'actions/galleryActions';

export const initialState = {
  images: [],
  filterBy: '',
  sortBy: 'size',
  filterMin: 10,
  filterMax: 10000
};

const galleryReducer = (state = initialState, action) => {
  if (action.type === ADD_IMAGE) {
    const { borderSize, color, height, width } = action;
    const id = generateUniqueHash();
    return {
      ...state,
      images: [...state.images, { id, borderSize, color, height, width }]
    };
  }
  if (action.type === DELETE_IMAGE) {
    const { id } = action;
    return {
      ...state,
      images: [...state.images.filter(image => image.id !== id)]
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
  return state;
};
export default galleryReducer;
