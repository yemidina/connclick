import React from 'react'
import { useSelector } from "react-redux";
import { Rating } from "@material-ui/lab";

const OfferReviewCard = ({reviews}) => {
    // eslint-disable-next-line
const { user } = useSelector((state) => state.user);

const { Offer } = useSelector(
    (state) => state.offerProductDetails
  );

    const options = {
        value: Offer.ratings,
        readOnly: true,
        precision: 0.5,
      };

    return (
        <>
        <div style={{
            display:"flex",
            alignItems:"center",
            padding:"0px 20px"
        }}>
            <img src="https://images.pexels.com/photos/5384429/pexels-photo-5384429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="User" 
            style={{
                borderRadius:50,
                height:30,
                width:30,
            }}
            />
            <p style={{fontSize:"1.2vmax",fontWeight:"600",padding:"0px 5px"}}>{reviews.name}</p>
            <Rating {...options} />
            <p style={{paddingLeft:"8px",color:"#999999e0"}}>{String(reviews.time).substr(0,10)}</p>
        </div>
          <div style={{padding:"0px 30px",paddingBottom:"5px"}}>
              <p style={{lineHeight:"1.3",fontSize:"1.2vmax"}}>{reviews.comment}</p>
          </div>
        </>
    )
}

export default OfferReviewCard
