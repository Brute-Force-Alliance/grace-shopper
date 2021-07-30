import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "../axios";
import { db } from "../firebase";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate Stripe secret
    const getClientSecret = async () => {
      const response = await axios({
        method: 'POST',
        // Format URL to send total in cents (currency subunit)
        url: `/payments/create?total=${Math.round(getBasketTotal(basket) * 100)}`
      });
      setClientSecret(response.data.clientSecret);
    }

    getClientSecret();
  }, [basket])

  const handleSubmit = async e => {
    // Stripe handling
    e.preventDefault();

    setProcessing(true);  //Prevent multiple buy now clicks

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      // payment confirmation

      const newCollection = db.collection('users').doc(user?.uid)
            .collection('orders')

        
      console.log('basket: ', basket);
      console.log('paymentIntent: ', paymentIntent);
      console.log('newCollection', newCollection);

      newCollection.doc(paymentIntent.id)
            .set({
              basket: basket,
              // amount: paymentIntent.amount,
              // created: paymentIntent.created
            })

      // db.collection('users')
      //   .doc(user?.uid)
      //   .collection('orders')
      //   .doc(paymentIntent.id)
      //   .set({
      //     basket: basket,
      //     amount: paymentIntent.amount,
      //     created: paymentIntent.created,
      //   })

      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type: 'EMPTY_BASKET'
      })

      history.replace('/orders'); //Send to Orders page after
    })

  }

  const handleChange = e => {
    // Listen for CardElement changes, display any errors
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  }

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout 
          (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>789 Broadway St</p>
            <p>Nowhere, Alaska</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
            <div className="payment_details">
              {/* Stripe */}
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}/>
                <div className="payment_priceContainer">
                  <CurrencyFormat 
                    renderText={(value) => (
                      <>
                      <h4>Order Total: {value}</h4>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={'$'}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                  </button>
                </div>

                {/* Error Handling */}
                {error && <div>{error}</div>}
              </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
