import { updateRect } from 'actions/editorActions';
import reducer, { initialState } from './editorReducer';

describe('editor reducer', () => {
  it('should return the initial state', () => {
    const invalidAction = {
      type: 'INVALID_ACTION'
    };
    expect(reducer(undefined, invalidAction)).toStrictEqual(initialState);
  });
  it('should handle UPDATE_RECT', () => {
    const updatedRect = {
      borderSize: 207,
      borderColor: '#ff2300',
      color: '#ff2300',
      height: 1111,
      width: 702
    };
    const action = updateRect({ ...updatedRect });
    const expectedState = { ...updatedRect };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
});
