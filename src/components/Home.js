import "./Home.css";
import React, { useState, useEffect } from "react";
import Product from "./Product";
import { db } from "../firebase";

// Custom Hook to create subscription to Firestore
const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products").limit(7)
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

const Home = () => {
  const products = useProducts();

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://i.ibb.co/wzywrtV/Brute-Force-Banner.jpg"
          alt=""
        />
        <div className="home_row">
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
        {/* <div className="home_row">
          <Product
            name="BFA Sock - Black"
            price={9.99}
            imageUrl="https://i.ibb.co/FXmB8b6/socks.png"
            rating={4}
          />
          <Product
            name="Brute Beanie - Charcoal"
            price={22.99}
            imageUrl="https://i.ibb.co/P5Xzk9p/BFA-Beanie-6.png"
            rating={4}
          />
          <Product
            name="Brute Box Logo - Black"
            price={24.99}
            imageUrl="https://i.ibb.co/8bK3gBv/BFA-Beanie-9.png"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            name="React Force - Black"
            price={24.99}
            imageUrl="https://i.ibb.co/Y7pTZ6p/BFA-Shirt-1.png"
            rating={4}
          />
          <Product
            name="Loose Script Tee - White"
            price={24.99}
            imageUrl="https://i.ibb.co/Ry510hG/BFA-Beanie-11.png"
            rating={4}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
