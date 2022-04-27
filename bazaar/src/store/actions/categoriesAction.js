import axiosAPI from "../../axiosAPI";

import {
  FETCH_CATEGORY_INIT,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  SET_CATEGORY_ID
} from '../actionConstants';

export function fetchCategories() {
  return dispatch => {
    dispatch(fetchCategoryInit());
    return axiosAPI.get("categories")
      .then(response => {
        // Fetch only enabled categories
        const enabledCatagories = response.data.filter(o => o.enabled === true)
        dispatch(fetchCategorySuccess(enabledCatagories))
      })
      .catch(error => {
        throw (error);
      });
  };
};
export const fetchCategoryInit = () => ({
  type: FETCH_CATEGORY_INIT
});

export const fetchCategorySuccess = data => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload: data
});

export const fetchCategoryError = error => ({
  type: FETCH_CATEGORY_ERROR,
  payload: { error }
});

export const setCategoryId = catId => ({
  type: SET_CATEGORY_ID,
  payload: catId
});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}


