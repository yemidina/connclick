import {
    ADD_TO_CART,
    ADD_TO_CART_OFFER,
    REMOVE_CART_ITEM,
    REMOVE_OFFER_CART_ITEM,
    SAVE_SHIPPING_INFO,
  } from "../constants/cartConstans";
  import axios from "axios";
  
  // Add to Cart ---Product
  export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);
  
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.Stock,
        quantity,
      },
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  

// Add to Cart ---Offer Product
export const addOfferItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/offersproduct/${id}`);

  dispatch({
    type: ADD_TO_CART_OFFER,
    payload: {
      Offer: data.Offer._id,
      name: data.Offer.name,
      price: data.Offer.price,
      image: data.Offer.images[0].url,
      stock: data.Offer.Stock,
      quantity,
    },
  });

  localStorage.setItem("offerCartItems", JSON.stringify(getState().OfferCart.offerCartItems));
};


  // REMOVE FROM CART ---Product
  export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  

// REMOVE FROM CART ---Offer Product
export const removeOfferItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_OFFER_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("offerCartItems", JSON.stringify(getState().OfferCart.offerCartItems));
};


  // SAVE SHIPPING INFO 
  export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });
  
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };