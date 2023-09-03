import {
  CREATE_RATING_REQUEST,
  CREATE_RATING_SUCCESS,
  CREATE_RATING_FAILURE,
  GET_PRODUCT_RATINGS_REQUEST,
  GET_PRODUCT_RATINGS_SUCCESS,
  GET_PRODUCT_RATINGS_FAILURE,
} from "./ratingsActionTypes"; // Import your action types

// Define your initial state

const initialState = {
  creatingRating: false,

  creatingRatingError: null,

  productRatings: [],

  productRatingsLoading: false,

  productRatingsError: null,
};

const ratingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RATING_REQUEST:
      return {
        ...state,

        creatingRating: true,

        creatingRatingError: null,
      };

    case CREATE_RATING_SUCCESS:
      return {
        ...state,

        creatingRating: false,

        productRatings: [...state.productRatings, action.payload],
      };

    case CREATE_RATING_FAILURE:
      return {
        ...state,

        creatingRating: false,

        creatingRatingError: action.payload,
      };

    case GET_PRODUCT_RATINGS_REQUEST:
      return {
        ...state,

        productRatingsLoading: true,

        productRatingsError: null,
      };

    case GET_PRODUCT_RATINGS_SUCCESS:
      return {
        ...state,

        productRatingsLoading: false,

        productRatings: action.payload,
      };

    case GET_PRODUCT_RATINGS_FAILURE:
      return {
        ...state,

        productRatingsLoading: false,

        productRatingsError: action.payload,
      };

    default:
      return state;
  }
};

export default ratingsReducer;
