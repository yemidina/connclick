import {
    ADD_TO_CART,
    ADD_TO_CART_OFFER,
    REMOVE_CART_ITEM,
    REMOVE_OFFER_CART_ITEM,
    SAVE_SHIPPING_INFO,
  } from "../constants/cartConstans";
  
  export const cartReducer = (
    state = { cartItems: [], shippingInfo: {} },
    action
  ) => {
    switch (action.type) {
      case ADD_TO_CART:
        const item = action.payload;
     
        const isItemExist = state.cartItems.find(
          (i) => i.product === item.product
        );

        if (isItemExist) {
          return {
            ...state,
            cartItems: state.cartItems.map((i) =>
              i.product === isItemExist.product ? item : i
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          };
      }

      case REMOVE_CART_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter((i) => i.product !== action.payload),
        };
  
      case SAVE_SHIPPING_INFO:
        return {
          ...state,
          shippingInfo: action.payload,
        };
  
      default:
        return state;

    }
  };

  export const OffercartReducer = (
    state = { offerCartItems: [], shippingInfo: {} },
    action
  ) => {
    switch (action.type) {
      case ADD_TO_CART_OFFER:
        const item = action.payload;
     
        const isItemExist = state.offerCartItems.find(
          (i) => i.Offer === item.Offer
        );

        if (isItemExist) {
          return {
            ...state,
            offerCartItems: state.offerCartItems.map((i) =>
              i.Offer === isItemExist.Offer ? item : i
            ),
          };
        } else {
          return {
            ...state,
            offerCartItems: [...state.offerCartItems, item],
          };
      }

      case REMOVE_OFFER_CART_ITEM:
        return {
          ...state,
          offerCartItems: state.offerCartItems.filter((i) => i.Offer !== action.payload),
        };
  
      case SAVE_SHIPPING_INFO:
        return {
          ...state,
          shippingInfo: action.payload,
        };
  
      default:
        return state;

    }
  };

