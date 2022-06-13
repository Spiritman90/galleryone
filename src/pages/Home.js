import React from "react";
import Banner from "../components/Banner";
import Modal from "../components/Modal";
import ProductImage from "../components/ProductImage";

const Home = () => {
  return (
    <header className='header'>
      <Banner />
      {/* <Modal></Modal> */}

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
