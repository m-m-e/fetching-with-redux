import fetch from 'cross-fetch';
import photos from '../../redux/photoReducers';
import {
  fetchPhotosRequest,
  // fetchPhotosFailure,
  fetchPhotosSuccess,
} from '../../redux/photoActionCreaters';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/photos?_limit=9&_page=1&_sort=title&_order=asc';

// const mapStateToProps = state => {
//   return {
//     photos: photos(state, fetchPhotosRequest)
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onTodoClick: id => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

export function fetchPhotos() {
  return function(dispatch) {
    dispatch(fetchPhotosRequest());
    return fetch(ENDPOINT)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(fetchPhotosSuccess(json))
      );
  };
}