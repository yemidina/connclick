import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { newProductReducer, newReviewReducer, productDetailsReducer, productReducer, productReviewsReducer, productsReducer, reviewReducer } from "./reducers/ProductReducers";
import { allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from "./reducers/userReducer";
import { cartReducer, OffercartReducer, OfferCartReducer } from "./reducers/cartReducer";
import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer } from "./reducers/orderReducer";
import { favouriteReducer, OfferfavouriteReducer } from "./reducers/favouriteReducer";
import { newOfferReducer, newOfferReviewReducer, OfferDeleteReducer, offerDetailsReducer, offerProductReducer } from "./reducers/OfferProductReducer";

const reducer = combineReducers({
    products: productsReducer,
    offer: offerProductReducer,
    productDetails: productDetailsReducer,
    offerProductDetails: offerDetailsReducer,
    user:userReducer,
    profile:profileReducer,
    forgotPassword:forgotPasswordReducer,
    cart: cartReducer,
    OfferCart:OffercartReducer,
    favourite:favouriteReducer,
    OfferFavourite:OfferfavouriteReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails:orderDetailsReducer,
    newReview: newReviewReducer,
    newOfferReview:newOfferReviewReducer,
    newProduct: newProductReducer,
    newOffer: newOfferReducer,
    product:productReducer,
    offerUpdate:OfferDeleteReducer,
    allOrders:allOrdersReducer,
    order: orderReducer,
    allUsers:allUsersReducer,
    userDetails: userDetailsReducer,
    productReviews: productReviewsReducer,
    review: reviewReducer,
});

let initialState = {
  cart:{
    cartItems : localStorage.getItem("cartItems") 
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
    
    shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    :{},
  },
  OfferCart:{
    offerCartItems : localStorage.getItem("offerCartItems") 
    ? JSON.parse(localStorage.getItem("offerCartItems"))
    : [],
  },
  favourite:{
    favouriteItems: localStorage.getItem("favouriteItems")
    ? JSON.parse(localStorage.getItem("favouriteItems"))
    : [],
  },
  OfferFavourite:{
    offerFavouriteItems: localStorage.getItem("offerFavouriteItems")
    ? JSON.parse(localStorage.getItem("offerFavouriteItems"))
    : [],
  },
};
 
const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store; 