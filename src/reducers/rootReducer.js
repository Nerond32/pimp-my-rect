import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import gallery from './galleryReducer';
import editor from './editorReducer';

const galleryPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['rects']
};

export default combineReducers({
  gallery: persistReducer(galleryPersistConfig, gallery),
  editor
});
