import {
  addImage,
  deleteImage,
  changeGalleryOptions
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
  it('should handle CHANGE_GALLERY_OPTIONS', () => {
    const newOptions = { filterMin: 17, sortBy: 'height' };
    const action = changeGalleryOptions(newOptions);
    const expectedState = { ...initialState, ...newOptions };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
});
