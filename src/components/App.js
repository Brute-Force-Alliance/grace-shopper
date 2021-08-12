import "./App.css";
import "./index.css";

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Admin, Resource } from 'react-admin';
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  FirebaseRealTimeSaga
} from 'react-admin-firebase';

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Register from "./Register";
import AdminPage from "./AdminPage";
import About from "./About";
import Payment from "./Payment";
import Orders from "./Orders";
import Shirts from "./Shirts";
import Pants from "./Pants";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import ProductList from "./ProductList";
import ProductCreate from  "./ProductCreate";
import ProductEdit from  "./ProductEdit";
import UserList from "./UserList";
import UserEdit from "./UserEdit";
import { auth, db } from "../firebase";
import { useStateValue } from "./StateProvider";
import Accessories from "./Accessories";

// Consider hiding in .env
const promise = loadStripe(
  "pk_test_51JGmgNC9dXaIWjJJDXxn8PfbjurdgfyrFYnOLfVgs5sPSSTEfJmummsXJp8lxLzOxnOpV9PXHk6FWU43mS3Srl7Z00IhriqKOO"
);

const options = {
  watch: ['products']
}
const dataProvider = FirebaseDataProvider(auth, options);
const authProvider = FirebaseAuthProvider(auth, options);

// <Header /> outside the <Switch> tags renders on all components
const App = () => {
  const [state, dispatch] = useStateValue();
  const [loggedUser, setLoggedUser] = useState();
  
  useEffect(() => {
    //will only run once when app component loads

    auth.onAuthStateChanged((authUser) => {
      db.collection("users")
        .doc(authUser.uid)
        .get()
        .then((snapshot) => {
          const data = snapshot.data();
          setLoggedUser(data)
        })          

      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser     
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
          <Route path="/admin" exact>
            {/* <AdminPage /> */}
            <Admin dataProvider={dataProvider} authProvider={authProvider}>
              <Resource name="products"
               list={ProductList}
               create={ProductCreate}
               edit={ProductEdit}
              />
              <Resource name="users"
              list={UserList}
              edit={UserEdit}
              />
            </Admin>
          </Route>
          <Route path="/orders" exact>
            <Header props={loggedUser} />
            <Orders />
          </Route>
          <Route path="/about" exact>
            <Header props={loggedUser} />
            <About />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/checkout" exact>
            <Header props={loggedUser} />
            <Checkout props={loggedUser} />
          </Route>
          <Route path="/payment" exact>
            <Header props={loggedUser} />
            <Elements stripe={promise}>
              <Payment props={loggedUser} />
            </Elements>
          </Route>
          <Route path="/products" exact>
            <Header props={loggedUser} />
            <Products />
          </Route>
          <Route path="/products/:id" exact>
            <Header props={loggedUser} />
            <SingleProduct />
          </Route>
          <Route path="/tops" exact>
            <Header props={loggedUser} />
            <Shirts />
          </Route>
          <Route path="/bottoms" exact>
            <Header props={loggedUser} />
            <Pants />
          </Route>
          <Route path="/accessories" exact>
            <Header props={loggedUser} />
            <Accessories />
          </Route>
          <Route path="/" exact>
            <Header props={loggedUser} />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
