import React from "react";
import "./Product.css";

// props-destructured get passed from Home.js in <Product /> to Product.js
const Product = ({ title, image, price, rating }) => {
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
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img alt="" src={image} />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
