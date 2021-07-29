import React from "react";
import "./CheckoutProduct.css";
import { StateProvider, useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating, hidebutton }) => {
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
              <p>🍌</p>
            ))}
        </div>
        {!hidebutton && (
          <button onClick={removeFromBasket}>Remove from Cart</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
