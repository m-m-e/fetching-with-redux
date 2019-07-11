export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

export const fetchPhotosRequest = () => {
  return { type: FETCH_PHOTOS_REQUEST };
};

export const fetchPhotosSuccess = json => {
  return { type: FETCH_POSTS_SUCCESS, payload: { json } };
};

export const fetchPhotosFailure = error => {
  return { type: FETCH_PHOTOS_FAILURE, payload: { error } };
};
