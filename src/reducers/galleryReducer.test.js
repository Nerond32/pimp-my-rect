import {
  addImage,
  deleteImage,
  changeFilterBy,
  changeSortBy,
  changeSortDirection,
  changeMinFilterValue,
  changeMaxFilterValue
} from 'actions/galleryActions';
import reducer, { initialState } from './galleryReducer';

describe('gallery reducer', () => {
  it('should return the initial state', () => {
    const invalidAction = {
      type: 'INVALID_ACTION'
    };
    expect(reducer(undefined, invalidAction)).toStrictEqual(initialState);
  });
  it('should handle ADD_IMAGE', () => {
    const newImage = {
      borderSize: 17,
      color: '#20bc10',
      height: 206,
      width: 1024
    };
    const action = addImage(...Object.values(newImage));
    const expectedState = {
      ...initialState,
      rects: [...initialState.rects, { ...newImage, id: undefined }]
    };
    const result = reducer(initialState, action);
    expect({
      ...result,
      rects: [...initialState.rects, { ...newImage, id: undefined }]
    }).toStrictEqual(expectedState);
  });
  it('should handle DELETE_IMAGE', () => {
    const newImage = {
      borderSize: 17,
      color: '#20bc10',
      height: 206,
      width: 1024
    };
    const addAction = addImage(...Object.values(newImage));
    const stateWithImage = reducer(initialState, addAction);
    const newImageId = stateWithImage.rects[0].id;
    const deleteAction = deleteImage(newImageId);
    expect(reducer(stateWithImage, deleteAction).rects).toHaveLength(0);
  });
  it('should handle CHANGE_FILTER_BY', () => {
    const action = changeFilterBy('borderSize');
    const expectedState = { ...initialState, filterBy: 'borderSize' };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
  it('should handle CHANGE_SORT_BY', () => {
    const action = changeSortBy('borderSize');
    const expectedState = { ...initialState, sortBy: 'borderSize' };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
  it('should handle CHANGE_SORT_DIRECTION', () => {
    const action = changeSortDirection();
    const expectedState = { ...initialState, sortDirection: 'ASC' };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
  it('should handle CHANGE_MIN_FILTER_VALUE', () => {
    const action = changeMinFilterValue(412);
    const expectedState = { ...initialState, filterMin: 412 };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
  it('should handle CHANGE_MAX_FILTER_VALUE', () => {
    const action = changeMaxFilterValue(8134);
    const expectedState = { ...initialState, filterMax: 8134 };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
});
