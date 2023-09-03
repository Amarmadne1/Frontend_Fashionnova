import axios from "axios";

import {
  CREATE_RATING_REQUEST,
  CREATE_RATING_SUCCESS,
  CREATE_RATING_FAILURE,
  GET_PRODUCT_RATINGS_REQUEST,
  GET_PRODUCT_RATINGS_SUCCESS,
  GET_PRODUCT_RATINGS_FAILURE,
} from "./ratingsActionTypes"; // Import your action types

export const createRating = (ratingData, jwtToken) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_RATING_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,

        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      "/api/ratings/create",
      ratingData,
      config
    );

    const rating = response.data;

    dispatch({ type: CREATE_RATING_SUCCESS, payload: rating });
  } catch (error) {
    dispatch({
      type: CREATE_RATING_FAILURE,

      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : "Failed to create rating",
    });
  }
};

export const getProductRatings = (productId) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_RATINGS_REQUEST });

    const response = await axios.get(`/api/ratings/product/${productId}`);

    const ratings = response.data;

    dispatch({ type: GET_PRODUCT_RATINGS_SUCCESS, payload: ratings });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_RATINGS_FAILURE,

      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : "Failed to fetch product ratings",
    });
  }
};
