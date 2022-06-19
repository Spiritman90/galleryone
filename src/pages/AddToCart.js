import React from "react";
import shirt1 from "../assets/cart-photo.png";
import shirt2 from "../assets/cart-photo2.png";
import DeleteIcon from "../customicons/DeleteIcon";

const AddToCart = () => {
  return (
    <section className='cart'>
      <div className='cart__flex'>
        <div className='cart__a'>
          <div className='cart__details'>
            <div className='cart__parent'>
              <div className='cart__items'>
                <img src={shirt1} alt='cart' className='cart__photo' />
              </div>

              <div className='cart__info'>
                <p className='cart__text'>
                  Samsung Galaxy Tab A 8.0", 32GB, 5100mAh, 4G LTE GSM SM-T295
                  (Black)
                </p>
                <p className='cart__price'>NGN 112,000</p>
                <div className='cart__buttons'>
                  <button className='cart__btn'>-</button>
                  <p className='cart__unit'>1</p>
                  <button className='cart__btn'>+</button>
                </div>
              </div>
              <div className='cart__icon'>
                <DeleteIcon />
              </div>
            </div>
          </div>
          <div className='cart__details'>
            <div className='cart__parent'>
              <div className='cart__items'>
                <img src={shirt2} alt='cart' className='cart__photo' />
              </div>

              <div className='cart__info'>
                <p className='cart__text'>
                  Samsung Galaxy Tab A 8.0", 32GB, 5100mAh, 4G LTE GSM SM-T295
                  (Black)
                </p>
                <p className='cart__price'>NGN 112,000</p>
                <div className='cart__buttons'>
                  <button className='cart__btn'>-</button>
                  <p className='cart__unit'>1</p>
                  <button className='cart__btn'>+</button>
                </div>
              </div>
              <div className='cart__icon'>
                <DeleteIcon />
              </div>
            </div>
          </div>
        </div>

        <div className='cart__b'>
          <div className='cart__container'>
            <div className='cart__total'>
              <div className='cart__subtotal'>
                <p className='cart__sub'>Total Item Cost</p>
                <p className='cart__sum'>NGN 141,250</p>
              </div>

              <div className='buynow__subtotal'>
                <p className='cart__sub'>Delivery fee</p>
                <p className='cart__sum'>NGN 1,500</p>
              </div>
            </div>
            <hr className=' cart__line' />

            <div className='cart__grand'>
              <div className='cart__due'>
                <p className='cart__fee'>Total Due</p>
                <p className='cart__fee'>NGN 142,750</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddToCart;
