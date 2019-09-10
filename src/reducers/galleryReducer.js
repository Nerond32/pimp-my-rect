import generateUniqueHash from 'utils/generateUniqueHash';
import {
  ADD_IMAGE,
  DELETE_IMAGE,
  CHANGE_GALLERY_OPTIONS
} from 'actions/galleryActions';

export const initialState = {
  rects: [],
  filterBy: 'size',
  sortBy: 'size',
  filterMin: 0,
  filterMax: 0,
  sortDirection: 'DESC'
};

const galleryReducer = (state = initialState, action) => {
  if (action.type === ADD_IMAGE) {
    const creationDate = Date.now();
    const id = generateUniqueHash();
    return {
      ...state,
      rects: [...state.rects, { creationDate, id, ...action.payload }]
    };
  }
  if (action.type === DELETE_IMAGE) {
    const { id } = action.payload;
    return {
      ...state,
      rects: [...state.rects.filter(image => image.id !== id)]
    };
  }
  if (action.type === CHANGE_GALLERY_OPTIONS) {
    return {
      ...state,
      ...action.payload
    };
  }
  return state;
};
export default galleryReducer;
