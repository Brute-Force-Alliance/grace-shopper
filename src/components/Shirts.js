import React, { useState, useEffect } from "react";
import "./Shirts.css";
import Product from "./Product";
import { db } from "../firebase";

function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("type", "==", "shirt")
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

const Shirts = () => {
  const products = useProducts();

  return (
    <div>
      <h3>Shirts</h3>
      <div className='shirts_container'>
        <div className="shirts_row">
          {products.map((product) => {
            return <Product {...product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shirts;
