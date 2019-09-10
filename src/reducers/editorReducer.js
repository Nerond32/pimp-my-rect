import { UPDATE_RECT } from 'actions/editorActions';

export const initialState = {
  borderSize: 5,
  borderColor: '#ffffff',
  color: '#ff0000',
  height: 200,
  width: 200
};

const editorReducer = (state = initialState, action) => {
  if (action.type === UPDATE_RECT) {
    return {
      ...state,
      ...action.payload
    };
  }
  return state;
};
export default editorReducer;
