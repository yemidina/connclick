import {
  ADD_TO_FAVOURITE,
  ADD_TO_FAVOURITE_OFFER,
  REMOVE_FROM_FAVOURITE,
  REMOVE_FROM_FAVOURITE_OFFER,
} from "../constants/favouriteConstans";

export const favouriteReducer = (
    state = {favouriteItems: []},
    action
) => {
    switch (action.type){
        case ADD_TO_FAVOURITE:
            const item = action.payload;

            const isItemExist = state.favouriteItems.find(
                (i) => i.product === item.product
              );
              
        if (isItemExist) {
            return {
              ...state,
              favouriteItems: state.favouriteItems.map((i) =>
                i.product === isItemExist.product ? item : i
              ),
            };
          } else {
            return {
              ...state,
              favouriteItems: [...state.favouriteItems, item],
            };
          }

       case REMOVE_FROM_FAVOURITE:
           return{
               ...state,
               favouriteItems: state.favouriteItems.filter((i) => i.product !== action.payload),
           };

           default:
            return state;
        }
    };  


  export const OfferfavouriteReducer = (
      state = {offerFavouriteItems: []},
      action
  ) => {
      switch (action.type){
          case ADD_TO_FAVOURITE_OFFER:
              const item = action.payload;
  
              const isItemExist = state.offerFavouriteItems.find(
                  (i) => i.Offer === item.Offer
                );
                
          if (isItemExist) {
              return {
                ...state,
                offerFavouriteItems: state.offerFavouriteItems.map((i) =>
                  i.Offer === isItemExist.Offer ? item : i
                ),
              };
            } else {
              return {
                ...state,
                offerFavouriteItems: [...state.offerFavouriteItems, item],
              };
            }
  
         case REMOVE_FROM_FAVOURITE_OFFER:
             return{
                 ...state,
                 offerFavouriteItems: state.offerFavouriteItems.filter((i) => i.Offer !== action.payload),
             };
  
             default:
              return state;
          }
      };  