import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import {
  addItemsToCart,
  addOfferItemsToCart,
  removeItemsFromCart,
  removeOfferItemsFromCart,
} from "../../actions/cartActions";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";
import CartItemCard from "./CartItemCard.js";
import OfferCartItemCard from "./OfferCartItemCard.js";
import BottomTab from "../layout/Header/BottomTab";

const Cart = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { cartItems } = useSelector((state) => state.cart);
  const { offerCartItems } = useSelector((state) => state.OfferCart);

  let Price = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  let offerPrice = offerCartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  let totalPrice = Price + offerPrice;

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return alert.error("Product Stock Limited");
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const increaseQuantityForOffers = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return alert.error("Product Stock Limited");
    }
    dispatch(addOfferItemsToCart(id, newQty));
  };


  const decreaseQuantityForOffers = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addOfferItemsToCart(id, newQty));
  };


  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };
  const deleteOfferCartItems = (id) => {
    dispatch(removeOfferItemsFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <>
      {cartItems.length === 0 && offerCartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />
          <Typography>No Items In Cart</Typography>
          <Link to="/products">View Products</Link>
          <BottomTab />
        </div>
      ) : (
        <>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                  <div className="cartInput">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.product, item.quantity)
                      }
                    >
                      -
                    </button>
                    <input type="number" readOnly value={item.quantity} />
                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="cartSubtotal">{`৳${
                    item.price * item.quantity
                  }`}</p>
                </div>
              ))}

            {offerCartItems &&
              offerCartItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <OfferCartItemCard
                    item={item}
                    deleteOfferCartItems={deleteOfferCartItems}
                  />
                  <div className="cartInput">
                    <button
                      onClick={() =>
                        decreaseQuantityForOffers(item.Offer, item.quantity)
                      }
                    >
                      -
                    </button>
                    <input type="number" readOnly value={item.quantity} />
                    <button
                      onClick={() =>
                        increaseQuantityForOffers(
                          item.Offer,
                          item.quantity,
                          item.stock
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="cartSubtotal">{`৳${
                    item.price * item.quantity
                  }`}</p>
                </div>
              ))}

            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Price Total</p>
                <p>৳ {totalPrice}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button onClick={checkoutHandler}>Check Out</button>
              </div>
            </div>
          </div>
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Cart;
