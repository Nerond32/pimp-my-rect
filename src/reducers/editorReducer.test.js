import {
  changeBorderSize,
  changeColor,
  changeHeight,
  changeWidth
} from 'actions/editorActions';
import reducer, { initialState } from './editorReducer';

describe('editor reducer', () => {
  it('should return the initial state', () => {
    const invalidAction = {
      type: 'INVALID_ACTION'
    };
    expect(reducer(undefined, invalidAction)).toStrictEqual(initialState);
  });
  it('should handle CHANGE_BORDER_SIZE', () => {
    const action = changeBorderSize(207);
    const expectedState = { ...initialState, borderSize: 207 };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
  it('should handle CHANGE_COLOR', () => {
    const action = changeColor('#ff2300');
    const expectedState = { ...initialState, color: '#ff2300' };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
  it('should handle CHANGE_HEIGHT', () => {
    const action = changeHeight(1111);
    const expectedState = { ...initialState, height: 1111 };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
  it('should handle CHANGE_WIDTH', () => {
    const action = changeWidth(702);
    const expectedState = { ...initialState, width: 702 };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
});
