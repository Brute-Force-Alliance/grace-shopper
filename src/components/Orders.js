import "./Orders.css";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    /*From Firestore, need to access users, then specific user id, then the user's orders
sort orders by most recent, then map thru orders by id and data*/

    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      console.log("user id from firebase", user.uid);
    } else {
      // User not logged in or has just logged out.
    }
  });

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders_order"></div>
      {orders?.map((order) => (
        <Order order={order} />
      ))}
    </div>
  );
};

export default Orders;
