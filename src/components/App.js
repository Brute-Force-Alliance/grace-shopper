import React from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// <Header /> outside the <Switch> tags renders on all components
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <h1>LOGIN</h1>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
