import React, { useState, useEffect } from "react";
import "./Pants.css";
import { db } from "../firebase";
import Product from "./Product";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("type", "==", "pant")
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
};

const Pants = () => {
  const products = useProducts();
  return (
    <div>
      <h3 className='pants_title'>Pants</h3>
      <div className="pants_row">
        {products.map((product) => {
          return <Product {...product} />;
        })}
      </div>
    </div>
  );
};

export default Pants;
