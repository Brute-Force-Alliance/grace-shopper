import React from "react";
import "./Home.css";
import Product from "./Product";

// Its really icky that these products are hard coded. Shouldnt these be in firebase or your own database?
const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://i.ibb.co/wzywrtV/Brute-Force-Banner.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            title="BruteForce Fullstack Collaboration Tee - White"
            price={24.99}
            image="https://i.ibb.co/8DqGXbJ/BFA-Shirt-3.png"
            rating={5}
          />
          <Product
            title="BFA Logo Tee - White"
            price={24.99}
            image="https://i.ibb.co/ssgtvDp/BFA-Shirt-4.png"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="BFA Sock - Black"
            price={9.99}
            image="https://i.ibb.co/FXmB8b6/socks.png"
            rating={4}
          />
          <Product
            title="Brute Beanie - Charcoal"
            price={22.99}
            image="https://i.ibb.co/P5Xzk9p/BFA-Beanie-6.png"
            rating={4}
          />
          <Product
            title="Brute Box Logo - Black"
            price={24.99}
            image="https://i.ibb.co/8bK3gBv/BFA-Beanie-9.png"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            title="React Force - Black"
            price={24.99}
            image="https://i.ibb.co/Y7pTZ6p/BFA-Shirt-1.png"
            rating={4}
          />
          <Product
            title="Loose Script Tee - White"
            price={24.99}
            image="https://i.ibb.co/Ry510hG/BFA-Beanie-11.png"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
