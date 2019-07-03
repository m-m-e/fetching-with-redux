export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export function fetchPhotosRequest() {
  return { type: FETCH_PHOTOS_REQUEST };
};

export function fetchPhotosFailure() {
  return { type: FETCH_PHOTOS_FAILURE, error: 'Error!' };
};

export function fetchPhotosSuccess(json) {
  return { type: FETCH_POSTS_SUCCESS, response: json };
};