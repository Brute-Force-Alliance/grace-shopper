import "./Products.css";
import React, { useState, useEffect } from "react";
import Product from "./Product";
import { db } from "../firebase";

// Custom Hook to create subscription to Firestore
const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
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

const Products = () => {
  const products = useProducts();

  return (
    <div className="products">      
    <h3 className='products_title'>All Items</h3>
      <div className="products_container">
        {/* <img
          className="home_image"
          src="https://i.ibb.co/wzywrtV/Brute-Force-Banner.jpg"
          alt=""
        /> */}
        <div className="product_row">
          {products.map((product) => {
            return (
              <Product
                {...product}
                key={product.id}
                // title={product.name}
                // image={product.imageUrl}
                // price={product.price}
                // rating={5}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
