import generateUniqueHash from 'utils/generateUniqueHash';
import { ADD_IMAGE, DELETE_IMAGE } from 'actions/galleryActions';

const initialState = {
  images: []
};

const galleryReducer = (state = initialState, action) => {
  if (action.type === ADD_IMAGE) {
    const { borderSize, color, size } = action;
    const id = generateUniqueHash();
    return {
      images: [...state.images, { id, borderSize, color, size }]
    };
  }
  if (action.type === DELETE_IMAGE) {
    const { id } = action;
    return {
      images: [...state.images.filter(image => image.id !== id)]
    };
  }
  return state;
};
export default galleryReducer;
