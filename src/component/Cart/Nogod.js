import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "../Cart/checkoutSteps";
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { removeItemsFromCart, removeOfferItemsFromCart } from "../../actions/cartActions";
import "./payment.css";
import {useAlert} from "react-alert";
import { createOrder } from "../../actions/orderAction";
import { Link } from "react-router-dom";
import BottomTab from "../layout/Header/BottomTab";

const Nogod = ({history}) => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const formRef = useRef(null)
  const dispatch = useDispatch();
  const alert = useAlert();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { OfferCartItems } = useSelector((state) => state.OfferCart);
  const { error } = useSelector((state) => state.newOrder);
  const {
    products
  } = useSelector((state) => state.products);
  
  const order = {
    shippingInfo,
    orderItems: cartItems.length ===  0 ? OfferCartItems : cartItems,
    itemsPrice: orderInfo.subtotal,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const success = () =>{
    
    dispatch(createOrder(order));
    order.paymentInfo = {
      status: "succeeded",
    };
    history.push("/success");
  }
    return (
      <>
        <>
        <MetaData title="Payment" />
        <CheckoutSteps activeStep={2} />
        <div className="paymentContainer">
        <div style={{
            backgroundColor:"tomato",
            height:"30px",
            display:"flex",
            alignItems:"center",
            overflow:"hidden"
          }}>
          <p className="block__text">
          In case of cash on delivery you have to pay before delivery charge...
          </p>
          </div>
          {/* Payment box */}
          <div className="bkash__box">
            <div className="nogod__inline" style={{width:"40%",backgroundColor:"#CB242A",marginTop:"2vmax",padding:"1vmax",justifyContent:"center",display:"flex",flexDirection:"column"}}>
              <div style={{justifyContent:"center",width:"100%",display:"flex"}}>
            <img className="nogod__image" src="https://www.kindpng.com/picc/b/47-479391_payment-methods-png.png" style={{
                width:"300px",
                height:"120px",
                objectFit:"cover"
                 }} />
              </div>
             <div>
             <span style={{display:"block",textAlign:"center",color:"#fff",padding:"1vmax 0"}}>Bank account: 1000141221896</span>
             </div>
             <div style={{justifyContent:"center",width:"100%",display:"flex"}}>
               <form style={{
                 display:"flex",
                 flexDirection:"column",
                 justifyContent:"flex-start"
               }}
               onSubmit={success}
               >
               <input type="text" className="trx" placeholder="Enter your 10digit payment trxID..." id='text' minLength={10} required style={{outline:"none",border:"none",width:"100%",height:"25px",padding:".5vmax 1vmax" 
              }}
               />
               <div className="flex align__items__center" style={{
                 padding:"10px 0"
               }}>
               <input type="checkbox" required className="pointer"/>
               <span
               className="terms"
               style={{
                 padding:"0px 5px",
                 color:"#fff",
                 fontFamily:"sans-serif",
                 fontSize:"1.1rem"
               }}>I Accept all the terms & condition...</span>
               </div>
               <input type="submit" value="SUBMIT" required 
               style={{
                 width:"100%",
                 border:"none",
                 height:"40px",
                 background:"#3BB77E",
                 color:"#fff",
                 cursor:"pointer"
               }}
               />
               </form>
             </div>
             <Link to="/process/payment">
             <h3
             className="nagadSwitch"
             style={{
               textAlign:"right",
               fontSize:"1rem",
               color:"#fff",
               fontWeight:"600"
             }}>Switch for Telebirr payment ?</h3>
             </Link>
            </div>
          </div>
          </div>
      </>
       <BottomTab />
       </>
    )
}

export default Nogod


