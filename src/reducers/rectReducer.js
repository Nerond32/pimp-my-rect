import {
  CHANGE_BORDER_SIZE,
  CHANGE_COLOR,
  CHANGE_SIZE
} from 'actions/rectActions';

const initialState = {
  borderSize: 5,
  color: '#ff0000',
  size: 200
};

const appReducer = (state = initialState, action) => {
  if (action.type === CHANGE_BORDER_SIZE) {
    const { borderSize } = action;
    return {
      ...state,
      borderSize
    };
  }
  if (action.type === CHANGE_COLOR) {
    const { color } = action;
    return {
      ...state,
      color
    };
  }
  if (action.type === CHANGE_SIZE) {
    const { size } = action;
    return {
      ...state,
      size
    };
  }
  return state;
};
export default appReducer;
