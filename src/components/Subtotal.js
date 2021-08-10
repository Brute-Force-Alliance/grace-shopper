import "./Subtotal.css";

import React from "react";
import CurrencyFormat from "react-currency-format";
import { Button } from "@material-ui/core";

import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const history = useHistory();

  // Destructure state to {basket}
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong> {value}</strong>
            </p>
            {/* <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small> */}
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default Subtotal;
