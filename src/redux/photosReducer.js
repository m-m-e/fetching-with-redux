import { 
  FETCH_PHOTOS_REQUEST, 
  FETCH_PHOTOS_FAILURE, 
  FETCH_POSTS_SUCCESS 
} from './photoActionCreaters';

const initialState = {
  isFetching: false,
  photoData: {},
  view: 'ascending',
  currentPage: 1,
  maxPerPage: 6,
  error: null
};

function photosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST:
      return { 
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_POSTS_SUCCESS:
      return { 
        ...state,
        isFetching: false,
        photoData: action.payload.json
      };
    case FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      };
    default:
      return state
  }
};

export default photosReducer;