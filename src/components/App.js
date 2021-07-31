import "./App.css";
import "./index.css";

import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "../firebase";
import { useStateValue } from "./StateProvider";

const promise = loadStripe('pk_test_51JGmgNC9dXaIWjJJDXxn8PfbjurdgfyrFYnOLfVgs5sPSSTEfJmummsXJp8lxLzOxnOpV9PXHk6FWU43mS3Srl7Z00IhriqKOO');

// <Header /> outside the <Switch> tags renders on all components
const App = () => {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when app component loads

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/orders" exact>
            <Header />
            <Orders />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/checkout" exact>
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment" exact>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
