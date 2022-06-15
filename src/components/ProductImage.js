import React from "react";
import { Link } from "react-router-dom";

const ProductImage = ({ ImageSource, details, price }) => {
  return (
    <Link to='/product-details'>
      <div className='product'>
        <div className='product__image'>
          <img src={ImageSource} alt='laptops' className='product__photo' />
          <p className='product__name'>{details}</p>
          <p className='product__price'>NGN{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductImage;
