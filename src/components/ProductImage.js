import React from "react";

const ProductImage = ({ ImageSource, title, price }) => {
  return (
    <div className='product'>
      <div className='product__image'>
        <img src={ImageSource} alt='laptops' className='product__photo' />
        <p className='product__name'>{title}</p>
        <p className='product__price'>NGN{price}</p>
      </div>
    </div>
  );
};

export default ProductImage;
