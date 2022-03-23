import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import Clock from "@material-ui/icons/QueryBuilder";

const OfferItemsCard = ({ offer }) => {
  const options = {
    value: offer.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <Link className="ProductCard" to={`/offersproduct/${offer._id}`}>
    <img src={offer.images[0].url} alt={offer.name} />
  <p className="productName">{offer.name}</p>
  <div>
    <Rating {...options} />
    <span>({offer.numOfReviews} Reviews)</span>
  </div>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
  <div>
      <h1
        className="discountPrice"
        style={{
          paddingLeft: "2.5vmax",
          fontSize: "1vmax",
          paddingBottom: "0",
          color:"tomato"
        }}
      >
        {offer.offerPrice}
      </h1>
      <span className="p__Price">{`৳${offer.price}`}</span>
    </div>
    </div>
    <div style={{
        display:"flex",
        alignItems:"center"
    }}>
        <Clock style={{
          fontSize: window.innerWidth > "900px" ? "22px":"16px"
        }} />
        <span style={{
            fontSize:"1vmax",
            margin:"0",
            marginLeft:"2px"
        }}>{offer.timeStamps}</span>
    </div>
</Link>
  );
};

export default OfferItemsCard;
