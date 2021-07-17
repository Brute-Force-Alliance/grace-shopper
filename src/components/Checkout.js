import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          alt=""
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h2 className="checkout_title">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating} />
          ))}
          {/*BasketItem*/}
          {/*BasketItem*/}
          {/*BasketItem*/}
          {/*BasketItem*/}
          {/*BasketItem*/}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
        <h2>Subtotal goes here</h2>
      </div>
    </div>
  );
};

export default Checkout;
