import {
  FETCH_PRODUCT_INIT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_ERROR
} from '../actionConstants';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_INIT:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload
      };

    case FETCH_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}