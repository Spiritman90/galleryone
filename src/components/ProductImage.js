import React from "react";
import offer from "../assets/offers.jpg";

const ProductImage = () => {
  return (
    <div className='product'>
      <div className='product__image'>
        <img src={offer} alt='laptops' className='product__photo' />
        <p className='product__name'>Macbook Pro 2020</p>
        <p className='product__price'>NGN950, 000</p>
      </div>
    </div>
  );
};

export default ProductImage;
