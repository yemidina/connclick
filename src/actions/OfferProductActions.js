import axios from "axios";
import {
  ADMIN_OFFERPRODUCT_FAIL,
  ADMIN_OFFERPRODUCT_REQUEST,
  ADMIN_OFFERPRODUCT_SUCCESS,
  ALL_OFFERPRODUCT_FAIL,
  ALL_OFFERPRODUCT_REQUEST,
  ALL_OFFERPRODUCT_SUCCESS,
  CLEAR_ERRORS,
  DELETE_OFFERPRODUCT_FAIL,
  DELETE_OFFERPRODUCT_REQUEST,
  DELETE_OFFERPRODUCT_SUCCESS,
  NEW_OFFERPRODUCT_FAIL,
  NEW_OFFERPRODUCT_REQUEST,
  NEW_OFFERPRODUCT_SUCCESS,
  NEW_OFFERREVIEW_FAIL,
  NEW_OFFERREVIEW_REQUEST,
  NEW_OFFERREVIEW_SUCCESS,
  OFFERPRODUCT_DETAILS_FAIL,
  OFFERPRODUCT_DETAILS_REQUEST,
  OFFERPRODUCT_DETAILS_SUCCESS,
  UPDATE_OFFERPRODUCT_FAIL,
  UPDATE_OFFERPRODUCT_REQUEST,
  UPDATE_OFFERPRODUCT_SUCCESS,
} from "../constants/OfferProductConstans";
import { NEW_REVIEW_FAIL, NEW_REVIEW_REQUEST, NEW_REVIEW_SUCCESS } from "../constants/ProductConstans";

export const getOfferproduct = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_OFFERPRODUCT_REQUEST,
    });

    let link = `/api/v1/offersproduct`;

    const { data } = await axios.get(link);

    dispatch({
      type: ALL_OFFERPRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_OFFERPRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Offer Details
export const getOfferProductDetails= (id) => async (dispatch)=>{
    try {
        dispatch({ type: OFFERPRODUCT_DETAILS_REQUEST });
    
        const { data } = await axios.get(`/api/v1/offersproduct/${id}`);
    
        dispatch({
          type: OFFERPRODUCT_DETAILS_SUCCESS,
          payload: data.Offer,
        });
      } catch (error) {
        dispatch({
          type: OFFERPRODUCT_DETAILS_FAIL,
          payload: error.response.message,
        });
      }
    };


// New offer create
export const createOffer = (offerData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_OFFERPRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/offers/new`,
      offerData,
      config
    );

    dispatch({
      type: NEW_OFFERPRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
      dispatch({
          type: NEW_OFFERPRODUCT_FAIL,
          payload: error.response.data.message
      });
  }
};


// Get All Products For Admin
export const getAdminOfferProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_OFFERPRODUCT_REQUEST });

    const { data } = await axios.get("/api/v1/admin/offersproduct");

    dispatch({
      type: ADMIN_OFFERPRODUCT_SUCCESS,
      payload: data.offer,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_OFFERPRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Update Product
export const updateOfferProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_OFFERPRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/edit/offersproduct/${id}`,
      productData,
      config
    );

    dispatch({
      type: UPDATE_OFFERPRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_OFFERPRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Delete Offer Product
export const deleteOfferProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_OFFERPRODUCT_REQUEST });

    const { data } = await axios.delete(`/api/v1/offersproduct/${id}`);

    dispatch({
      type: DELETE_OFFERPRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_OFFERPRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};


// NEW REVIEW --Offer
export const OffernewReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_OFFERREVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(`/api/v1/offers/review`, reviewData, config);

    dispatch({
      type: NEW_OFFERREVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_OFFERREVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};


//   Clearing errors
export const clearErrors= () => async (dispatch)=>{
    dispatch({
        type: CLEAR_ERRORS
    })
}