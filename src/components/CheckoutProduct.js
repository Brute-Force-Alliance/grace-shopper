import "./CheckoutProduct.css";

import React from "react";
import { Button } from "@material-ui/core";

import { StateProvider, useStateValue } from "./StateProvider";

const CheckoutProduct = (props) => {
  const { id, image, title, price, rating, hidebutton } = props;
  const [{ basket }, dispatch] = useStateValue();

  // Removes item from basket
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🍌</p>
            ))}
        </div>
        {!hidebutton && (
          <Button onClick={removeFromBasket}>Remove from Cart</Button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
