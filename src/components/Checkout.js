import "./Checkout.css";

import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase"
// import FlipMove from "react-flip-move"; Will review to add later, animation for removing items from cart

import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout = ({props}) => {
  const [{ basket, user }, dispatch] = useStateValue();
  
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          alt=""
          src="" //needs a landscape img or banner
        />
        <div>
          <h3>Hello, {props?.firstName} {props?.lastName}</h3>
          <h2 className="checkout_title">Your Shopping Cart</h2>
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
