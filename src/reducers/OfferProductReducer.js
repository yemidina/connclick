import {
  ALL_OFFERPRODUCT_FAIL,
  ALL_OFFERPRODUCT_REQUEST,
  ALL_OFFERPRODUCT_SUCCESS,
  DELETE_OFFERPRODUCT_FAIL,
  DELETE_OFFERPRODUCT_REQUEST,
  DELETE_OFFERPRODUCT_RESET,
  DELETE_OFFERPRODUCT_SUCCESS,
  NEW_OFFERPRODUCT_FAIL,
  NEW_OFFERPRODUCT_REQUEST,
  NEW_OFFERPRODUCT_RESET,
  NEW_OFFERPRODUCT_SUCCESS,
  OFFERPRODUCT_DETAILS_FAIL,
  OFFERPRODUCT_DETAILS_REQUEST,
  OFFERPRODUCT_DETAILS_SUCCESS,
  UPDATE_OFFERPRODUCT_FAIL,
  UPDATE_OFFERPRODUCT_REQUEST,
  UPDATE_OFFERPRODUCT_RESET,
  ADMIN_OFFERPRODUCT_REQUEST,
  ADMIN_OFFERPRODUCT_SUCCESS,
  UPDATE_OFFERPRODUCT_SUCCESS,
  ADMIN_OFFERPRODUCT_FAIL,
  CLEAR_ERRORS,
  NEW_OFFERREVIEW_REQUEST,
  NEW_OFFERREVIEW_SUCCESS,
  NEW_OFFERREVIEW_FAIL,
  NEW_OFFERREVIEW_RESET,
} from "../constants/OfferProductConstans";

// All Products
export const offerProductReducer = (state = { offer: [] }, action) => {
  switch (action.type) {
    case ALL_OFFERPRODUCT_REQUEST:
      case ADMIN_OFFERPRODUCT_REQUEST:
      return {
        loading: true,
        offer: [],
      };
    case ALL_OFFERPRODUCT_SUCCESS:
      return {
        loading: false,
        offer: action.payload.offer,
      };

      case ADMIN_OFFERPRODUCT_SUCCESS:
        return{
          loading:false,
          offer:action.payload
        }

    case ALL_OFFERPRODUCT_FAIL:
    case ADMIN_OFFERPRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Offer Details
export const offerDetailsReducer = (state = { Offer: {} }, action) => {
  switch (action.type) {
    case OFFERPRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case OFFERPRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        Offer: action.payload,
      };
    case OFFERPRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// new offer create
export const newOfferReducer = (state = { offer: {} }, action) => {
  switch (action.type) {
    case NEW_OFFERPRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_OFFERPRODUCT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        offer: action.payload.offer,
      };
    case NEW_OFFERPRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_OFFERPRODUCT_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Delete Offer 
export const OfferDeleteReducer = (state = {}, action) =>{
  switch (action.type) {
    case DELETE_OFFERPRODUCT_REQUEST:
    case UPDATE_OFFERPRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_OFFERPRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

      case UPDATE_OFFERPRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_OFFERPRODUCT_FAIL:
      case UPDATE_OFFERPRODUCT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_OFFERPRODUCT_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_OFFERPRODUCT_RESET:
        return {
          ...state,
          isUpdated: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };


  // Offer Product review
export const newOfferReviewReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case NEW_OFFERREVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_OFFERREVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_OFFERREVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_OFFERREVIEW_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};