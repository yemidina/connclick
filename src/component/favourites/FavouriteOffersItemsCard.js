import React,{useState,useEffect} from 'react';
import { Link} from 'react-router-dom';
import "./FavouriteItemsCard.css";
import { useSelector,useDispatch } from "react-redux";
import { addItemsToCart } from "../../actions/cartActions";
import { useAlert } from 'react-alert';
import { getProductDetails } from '../../actions/ProductActions';
import { clearErrors } from '../../actions/OfferProductActions';

const FavouriteOffersItemsCard = ({item,deleteOfferFavouriteItems}) => {
    const { product} = useSelector(
        (state) => state.productDetails
      );
      const { Offer } = useSelector(
        (state) => state.offerProductDetails
      );
  
    return (     
        <div className='FavouriteItemsCard'>
        <div>
        <img src={item.image} alt="ssa" />
        <p onClick={() => deleteOfferFavouriteItems(item.Offer)}>Remove</p>
        <Link to={`/product/${item.product}`} style={{
            fontSize:"300 0.9vmax",
            fontFamily:"cursive",
        }}>{item.name}</Link>
        </div>

        <div>
            <span>{`৳ ${item.price}`}</span> 
        </div>

        <div>
        <p style={{ paddingBottom: ".5vmax" }}>
              <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                {product.Stock < 1 ? "OutOfStock" : "InStock"}
              </b>
            </p>
        </div>
        
        <div>
          <Link to={`/offersproduct/${item.Offer}`}>
           <button className='favouritesButton'onClick={() => deleteOfferFavouriteItems(item.Offer)}>Add To Cart</button>
           </Link>
        </div>

    </div>
    )
}

export default FavouriteOffersItemsCard
