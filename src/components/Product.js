import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

// props-destructured get passed from Home.js in <Product /> to Product.js
const Product = (item) => {
  const { id, title, image, price, rating } = item;
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🍌</p>
            ))}
        </div>
      </div>
      <img alt="" src={image} />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
};

export default Product;
