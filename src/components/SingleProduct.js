import "./SingleProduct.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleProductCard from "./SingleProductCard";
import { db } from "../firebase";

// Custom Hook to create subscription to Firestore
const useProduct = () => {
  const [product, setProduct] = useState();

  const { id } = useParams();

  useEffect(() => {
    db.collection("products")
      .doc(id)
      .get()
      .then((snapshot) => {
        const data = {
          id: snapshot.id,
          ...snapshot.data(),
        };
        setProduct(data);
      });
  }, []);

  return product;
};

const SingleProduct = () => {
  const product = useProduct();
  console.log('product: ', product);
  return (
    <div className="single_product">      
    <h3 className='single_product_title'>Product Detail</h3>
      <div className="single_product_container">
        {/* <img
          className="home_image"
          src="https://i.ibb.co/wzywrtV/Brute-Force-Banner.jpg"
          alt=""
        /> */}
        <div className="single_product_row">
             <SingleProductCard
                {...product}
                // key={product.id}
                // title={product.name}
                // image={product.imageUrl}
                // price={product.price}
                // rating={5}
              />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
