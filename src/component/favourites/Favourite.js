import React from 'react';
import "./Favourite.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import {deleteFavouriteItemsToCart, deleteOfferFavouriteItemsToCart} from "../../actions/favouriteActions"
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";
import FavouriteItemsCard from './FavouriteItemsCard';
import MetaData from '../layout/MetaData';
import Loading from '../layout/loader/Loading';
import { useState } from "react";
import FavouriteOffersItemsCard from "./FavouriteOffersItemsCard.js"
import BottomTab from '../layout/Header/BottomTab';

const Favourite = ({history}) => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const {loading} = useSelector(
      (state) => state.productDetails
    );
    const { favouriteItems } = useSelector((state) => state.favourite);
    const { offerFavouriteItems } = useSelector((state) => state.OfferFavourite);

  
      const deleteFavouriteItems = (id) => {
        dispatch(deleteFavouriteItemsToCart(id));
      };

      const deleteOfferFavouriteItems = (id) => {
        dispatch(deleteOfferFavouriteItemsToCart(id));
      };
    
    return (
       <>
       {loading ? (
         <Loading />
       ) : (
        <>
        <MetaData title="Favourites Items" />
        {favouriteItems.length === 0 && offerFavouriteItems.length === 0 ? (
            <div className="emptyCart">
            <RemoveShoppingCartIcon />
            <Typography>No Items In Favourites</Typography>
            <Link to="/products">View Products</Link>
          <BottomTab />
          </div>
        ): (
            <>
              <div className="favouritesPage">
                <div className="favouritesHeader">
                <p>Product</p>
                <p>Price</p>
                <p>Stock Status</p>
                <p>Action</p>
                </div>
                {favouriteItems &&
                favouriteItems.map((item) => (
                    <div className="favouritesContainer" key={item.product}>
                        <FavouriteItemsCard item={item} deleteFavouriteItems={deleteFavouriteItems} />
                    </div>
                ))
                }

                 {offerFavouriteItems &&
                offerFavouriteItems.map((item) => (
                    <div className="favouritesContainer" key={item.Offer}>
                        <FavouriteOffersItemsCard item={item} deleteOfferFavouriteItems={deleteOfferFavouriteItems} />
                    </div>
                ))
                }
             <BottomTab />
              </div>
            </>
        )}
        </>
       )}
       </>
    )
}

export default Favourite
