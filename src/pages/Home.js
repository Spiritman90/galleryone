import React from "react";
import Banner from "../components/Banner";
// import Confirm from "../components/Confirm";
import ProductImage from "../components/ProductImage";

const Home = () => {
  console.log("object");
  return (
    <header className='header'>
      <Banner />
      {/* <Confirm /> */}

      <section className='offers'>
        <p className='offers__heading'>Best Offers</p>
        <div className='offers__card'>
          <ProductImage />
          <ProductImage />
          <ProductImage />
          <ProductImage />
          <ProductImage />
          <ProductImage />
          <ProductImage />
          <ProductImage />
          <ProductImage />
          <ProductImage />
          <ProductImage />
          <ProductImage />
          <ProductImage />
          <ProductImage />
          <ProductImage />
        </div>
      </section>
    </header>
  );
};

export default Home;
