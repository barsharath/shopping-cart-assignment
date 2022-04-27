import {
  FETCH_CATEGORY_INIT,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  SET_CATEGORY_ID
} from '../actionConstants';

const initialState = {
  catItems: [],
  loading: false,
  error: null,
  selectedCategoryId: null
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORY_INIT:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        catItems: action.payload
      };

    case FETCH_CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        catItems: []
      };

    case SET_CATEGORY_ID:
      return {
        ...state,
        selectedCategoryId: action.payload
      };

    default:
      return state;
  }
}