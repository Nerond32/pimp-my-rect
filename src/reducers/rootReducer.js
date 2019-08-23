import { combineReducers } from 'redux';
import gallery from './galleryReducer';
import rect from './rectReducer';

export default combineReducers({
  gallery,
  rect
});
