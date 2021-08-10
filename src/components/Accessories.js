import React, { useState, useEffect } from "react";
import "./Accessories.css";
import { db } from "../firebase";
import Product from "./Product";

function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("type", "==", "accessory")
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(data);
      });
  }, []);

  return products;
}

const Accessories = () => {
  const products = useProducts();
  return (
    <div className="accessories">
      <h3 className="accessories_title">Accessories</h3>
      <div className="accessories_container">
        <div className="accessories_row">
          {products.map((product) => {
            return <Product {...product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Accessories;
