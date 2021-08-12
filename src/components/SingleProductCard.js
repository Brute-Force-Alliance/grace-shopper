import "./SingleProductCard.css";

import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useStateValue } from "./StateProvider";

const useStyles = makeStyles({
  button: {
    fontSize: "8pt",
  }
});

// props-destructured get passed from Home.js in <Product /> to Product.js
const SingleProductCard = (item) => {
  const classes = useStyles();
  const { id, title, imageUrl, price, rating, description } = item;
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
    <div className="single_product_card">
      <div className="single_product_card_info">
        <p className="title">{title}</p>
        <p className="single_product_card_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="single_product_card_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🍌</p>
            ))}
        </div>
      </div>
      <div className="img_container">
        <img alt="" src={imageUrl} />
      </div>
      <div className="single_product_card_desc">
        {description}
      </div>
      <Button className={classes.button} size="medium" onClick={addToBasket}>Add to Cart</Button>
    </div>
  );
};

export default SingleProductCard;
