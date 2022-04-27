import axiosAPI from "../../axiosAPI";
import {
  FETCH_PRODUCT_INIT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_ERROR
} from '../actionConstants';

export function fetchProducts(catId) {
  return dispatch => {
    dispatch(fetchProductInit());
    return axiosAPI.get("products")
      .then(response => {
        const data = response.data;
        dispatch(fetchProductSuccess(data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const fetchProductInit = () => ({
  type: FETCH_PRODUCT_INIT
});

export const fetchProductSuccess = data => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: data
});

export const fetchProductError = error => ({
  type: FETCH_PRODUCT_ERROR,
  payload: { error }
});
