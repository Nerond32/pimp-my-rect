import {
  addImage,
  deleteImage,
  changeFilterBy,
  changeSortBy
} from 'actions/galleryActions';
import reducer from './galleryReducer';

const initialState = {
  images: [],
  filterBy: '',
  sortBy: 'size',
  filterMin: 10,
  filterMax: 10000
};

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
      images: [...initialState.images, { ...newImage, id: undefined }]
    };
    const result = reducer(initialState, action);
    expect({
      ...result,
      images: [...initialState.images, { ...newImage, id: undefined }]
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
    const newImageId = stateWithImage.images[0].id;
    const deleteAction = deleteImage(newImageId);
    expect(reducer(stateWithImage, deleteAction).images).toHaveLength(0);
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
});
