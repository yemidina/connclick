import React from 'react'
import { useSelector } from 'react-redux';

const RelatedProductCard = () => {
    const {  product, loading, error } = useSelector(
        (state) => state.productDetails
      );
    
    return (
        <div> 
            
        </div>
    )
}

export default RelatedProductCard
