import "./Product.css";

import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  button: {
    fontSize: "8pt",
  }
});

// props-destructured get passed from Home.js in <Product /> to Product.js
const Product = (item) => {
  const classes = useStyles();
  const { id, title, imageUrl, price, rating } = item;
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: imageUrl,
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
      <Link to={`/products/${id}`} className="img_link">
        <img alt="" src={imageUrl} />
      </Link>
      <Button className={classes.button} size="medium" onClick={addToBasket}>Add to Cart</Button>
    </div>
  );
};

export default Product;
