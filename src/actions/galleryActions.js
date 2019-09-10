export const ADD_IMAGE = 'GALLERY.ADD_IMAGE';
export const DELETE_IMAGE = 'GALLERY.DELETE_IMAGE';
export const CHANGE_GALLERY_OPTIONS = 'GALLERY.CHANGE_GALLERY_OPTIONS';

export const addImage = attributes => {
  return { type: ADD_IMAGE, payload: attributes };
};

export const deleteImage = id => {
  return { type: DELETE_IMAGE, payload: { id } };
};

export const changeGalleryOptions = settings => ({
  type: CHANGE_GALLERY_OPTIONS,
  payload: settings
});
