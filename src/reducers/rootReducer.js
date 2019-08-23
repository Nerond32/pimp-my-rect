import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import gallery from './galleryReducer';
import rect from './rectReducer';

const galleryPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['images']
};

export default combineReducers({
  gallery: persistReducer(galleryPersistConfig, gallery),
  rect
});
