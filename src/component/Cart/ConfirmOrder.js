import React, { Fragment } from "react";
import "./ConfirmOrder.css";
import { useSelector } from "react-redux";
import CheckoutSteps from "../Cart/checkoutSteps";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import BottomTab from "../layout/Header/BottomTab";



const ConfirmOrder = ({ history }) => {
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);

    const { offerCartItems } = useSelector((state) => state.OfferCart);

    const { user } = useSelector((state) => state.user);
    
    let productPrice =  cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
   
    let offerProductPrice = offerCartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );

    const subtotal = productPrice + offerProductPrice
      // eslint-disable-next-line
    const shippingCharges = shippingInfo.state == 22 ? 70 : 120;
    
    const totalPrice = subtotal + shippingCharges;
  
    const address = `${shippingInfo.address}, ${shippingInfo.state}, ${shippingInfo.country}`;
  
    const proceedToPayment = () => {
      const data = {
        subtotal,
        shippingCharges,
        totalPrice,
      };
  
      sessionStorage.setItem("orderInfo", JSON.stringify(data));
  
      history.push("/process/payment");
    };
  
    return (
      <Fragment>
        <MetaData title="Confirm Order" />
        <CheckoutSteps activeStep={1} />
        <div className="confirmOrderPage">
          <div>
            <div className="confirmshippingArea">
              <Typography>Shipping Info</Typography>
              <div className="confirmshippingAreaBox">
                <div>
                  <p>Name:</p>
                  <span>{user.name}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>{shippingInfo.phoneNo}</span>
                </div>
                <div>
                  <p>Address:</p>
                  <span>{address}</span>
                </div>
              </div>
            </div>
            <div className="confirmCartItems">
              <Typography>Your Cart Items:</Typography>


              {cartItems.length === 0 ? 
                <div className="confirmCartItemsContainer">
                {offerCartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.product}`}>
                      {item.name}
                    </Link>{" "}
                    <span>
                      {item.quantity} X ৳{item.price} ={" "}
                      <b>৳{item.price * item.quantity}</b>
                    </span>
                  </div>
                ))
                 }
            </div>
             :
             <div className="confirmCartItemsContainer">
             {cartItems.map((item) => (
               <div key={item.product}>
                 <img src={item.image} alt="Product" />
                 <Link to={`/product/${item.product}`}>
                   {item.name}
                 </Link>{" "}
                 <span>
                   {item.quantity} X ৳{item.price} ={" "}
                   <b>৳{item.price * item.quantity}</b>
                 </span>
               </div>
             ))
              }
           </div>
          }

   
          {cartItems.length != 0 ? 
                <div className="confirmCartItemsContainer">
                {offerCartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.product}`}>
                      {item.name}
                    </Link>{" "}
                    <span>
                      {item.quantity} X ৳{item.price} ={" "}
                      <b>৳{item.price * item.quantity}</b>
                    </span>
                  </div>
                ))
                 }
                 </div>
                   :
                 <div style={{
                   display:"none"
                 }}>

                 </div>
          }
     
            </div>
          </div>
          {/*  */}
          <div>
            <div className="orderSummary">
              <Typography>Order Summery</Typography>
              <div>
                <div>
                  <p>Subtotal:</p>
                  <span>৳{subtotal}</span>
                </div>
                <div>
                  <p>Shipping Charges:</p>
                  <span>৳{shippingCharges}</span>
                </div>
                <div>
                </div>
              </div>
  
              <div className="orderSummaryTotal">
                <p>
                  <b>Total:</b>
                </p>
                <span>৳{totalPrice}</span>
              </div>
                  
              <div className="payment__method">
                <span style={{textAlign:"center",display:"block",fontWeight:"600"}}>*Select a payment method</span>
                <form>
                <div style={{
                  justifyContent:"unset",
                  padding:"10px 0"
                }}>
                <input type="checkbox" name="Payment__method" required />
                <span style={{paddingLeft:"5px"}}>Cash on Delivery</span>
                </div>
                <div style={{
                  justifyContent:"unset",
                  padding:"10px 0"
                }}>
                <input type="checkbox" name="Payment__method" />
                <span style={{paddingLeft:"5px"}}>Telebirr</span>
                </div>
                <div style={{
                  justifyContent:"unset",
                  padding:"10px 0"
                }}>
                <input type="checkbox" name="Payment__method" />
                <span style={{paddingLeft:"5px"}}>Paypal</span>
                </div>
                </form>
              </div>
              <button onClick={proceedToPayment}>Proceed To Payment</button>
            </div>
          </div>
        </div>
        <BottomTab />
      </Fragment>
    );
  };
  
  export default ConfirmOrder;
