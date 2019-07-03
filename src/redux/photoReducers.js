import { 
  FETCH_PHOTOS_REQUEST, 
  FETCH_PHOTOS_FAILURE, 
  FETCH_POSTS_SUCCESS 
} from './photoActionCreaters';
// import { combineReducers } from 'redux';

const initialState = {
  isFetching: false,
  photoData: {},
  view: 'ascending',
  currentPage: 1
};

function photos(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_PHOTOS_FAILURE:
      console.error(action.error);
      return { ...state, isFetching: false };
    case FETCH_POSTS_SUCCESS:
      return { ...state,
        isFetching: false,
        photoData: action.response};
    default:
      return state
  }
};


// const photoActions = combineReducers({
//   photos,
// })

export default photos;