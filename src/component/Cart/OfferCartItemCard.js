import React from 'react';
import { Link } from 'react-router-dom';
import "./CartItemCard.css";

const OfferCartItemCard = ({item, deleteOfferCartItems}) => {
    return (
        <div className='CartItemCard'>
            <img src={item.image} alt="ssa" />
            <div>
                <Link to={`/product/${item.product}`}>{item.name}</Link>
                <span>{`Price: ৳ ${item.price}`}</span> 
                <p onClick={() => deleteOfferCartItems(item.Offer)}>Remove</p>
            </div>
        </div>
    ) 
}

export default OfferCartItemCard
