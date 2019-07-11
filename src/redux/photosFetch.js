// import fetch from 'cross-fetch';
import {
  fetchPhotosRequest,
  fetchPhotosFailure,
  fetchPhotosSuccess,
} from './photoActionCreaters';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/photos?_limit=9&_page=1&_sort=title&_order=asc';

export function fetchPhotos() {
  return function(dispatch) {
    dispatch(fetchPhotosRequest());
    return fetch(ENDPOINT)
      .then(handleErrors)
      .then(response => response.json())
      .then(json => {
        dispatch(fetchPhotosSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchPhotosFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}