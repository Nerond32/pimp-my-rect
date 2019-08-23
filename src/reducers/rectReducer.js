import {
  CHANGE_BORDER_SIZE,
  CHANGE_COLOR,
  CHANGE_HEIGHT,
  CHANGE_WIDTH
} from 'actions/rectActions';

const initialState = {
  borderSize: 5,
  color: '#ff0000',
  height: 200,
  width: 200
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
  if (action.type === CHANGE_HEIGHT) {
    const { height } = action;
    return {
      ...state,
      height
    };
  }
  if (action.type === CHANGE_WIDTH) {
    const { width } = action;
    return {
      ...state,
      width
    };
  }
  return state;
};
export default appReducer;
