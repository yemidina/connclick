import { ADD_TO_FAVOURITE, ADD_TO_FAVOURITE_OFFER, REMOVE_FROM_FAVOURITE, REMOVE_FROM_FAVOURITE_OFFER}
from "../constants/favouriteConstans";
import axios from "axios";

// Add to favourites --Product
export const addFavouriteItemsToCart = (id,quantity) => async (dispatch, getState) =>{
    const {data} = await axios.get(`/api/v1/product/${id}`);

    dispatch({
        type: ADD_TO_FAVOURITE,
        payload: {
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            image: data.product.images[0].url,
            stock: data.product.Stock,
            quantity,
        }
    })

    localStorage.setItem("favouriteItems", JSON.stringify(getState().favourite.favouriteItems));
}

// Add to favourites --Offer Product
export const addOfferFavouriteItemsToCart = (id,quantity) => async (dispatch, getState) =>{
    const {data} = await axios.get(`/api/v1/offersproduct/${id}`);

    dispatch({
        type: ADD_TO_FAVOURITE_OFFER,
        payload: {
            Offer: data.Offer._id,
            name: data.Offer.name,
            price: data.Offer.price,
            image: data.Offer.images[0].url,
            stock: data.Offer.Stock,
            quantity,
        }
    })

    localStorage.setItem("offerFavouriteItems", JSON.stringify(getState().OfferFavourite.offerFavouriteItems));
}

// Delete from favourites
export const deleteFavouriteItemsToCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_FROM_FAVOURITE,
      payload: id,
    });
  
    localStorage.setItem("favouriteItems", JSON.stringify(getState().favourite.favouriteItems));
  };


// Delete from favourites --Offer
export const deleteOfferFavouriteItemsToCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_FROM_FAVOURITE_OFFER,
      payload: id,
    });
  
    localStorage.setItem("offerFavouriteItems", JSON.stringify(getState().OfferFavourite.offerFavouriteItems));
  };