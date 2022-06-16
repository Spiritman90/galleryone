import React, { useState } from "react";
import buy from "../assets/buy-now.png";
import Check from "../customicons/Check";
import Green from "../customicons/Green";

const BuyNow = () => {
  const [showForm, setShowForm] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  return (
    <section className='buynow'>
      <div className='buynow__flex'>
        <div className='buynow__a'>
          <div
            className='buynow__address'
            onClick={() => setShowForm(!showForm)}
          >
            <div className='buynow__parent'>
              <div className='buynow__check'>
                {!showForm ? <Check /> : <Green />}
              </div>
              <div className='buynow__location'>
                <p className='buynow__text'>1. Address details</p>
              </div>
            </div>
          </div>

          {showForm && (
            <div className='buynow__info'>
              <form className='buynow__form'>
                <div className='buynow__special'>
                  <label className='buynow__label1'>
                    <input
                      type='text'
                      className='buynow__input1'
                      placeholder='First name'
                    />
                  </label>
                  <label className='buynow__label1'>
                    <input
                      type='text'
                      className='buynow__input1'
                      placeholder='Last name'
                    />
                  </label>
                </div>

                <label className='buynow__label2'>
                  <input
                    type='number'
                    className='buynow__input2'
                    placeholder='Phone Number'
                  />
                </label>
                <label className='buynow__label2'>
                  <input
                    type='number'
                    className='buynow__input2'
                    placeholder='Delivery address'
                  />
                </label>
                <label className='buynow__label2'>
                  <input
                    type='number'
                    className='buynow__input2'
                    placeholder='State/Region'
                  />
                </label>
                <label className='buynow__label2'>
                  <input
                    type='number'
                    className='buynow__input2'
                    placeholder='City'
                  />
                </label>
                <div className='buynow__button'>
                  <button className='buynow__btn'>Save and continue</button>
                </div>
              </form>
            </div>
          )}

          <div
            className='buynow__address'
            onClick={() => setShowPayment(!showPayment)}
          >
            <div className='buynow__parent'>
              <div className='buynow__check'>
                {!showPayment ? <Check /> : <Green />}
              </div>
              <div className='buynow__location'>
                <p className='buynow__text'>2. Payment method</p>
              </div>
            </div>
          </div>
          {showPayment && (
            <div className='buynow__pay'>
              <form className='buynow__paymentform'>
                <label className='buynow__paymentlabel'>
                  <input
                    type='text'
                    className='buynow__paymentinput1'
                    placeholder='Cardholder name'
                  />
                </label>

                <label className='buynow__paymentlabel'>
                  <input
                    type='number'
                    className='buynow__paymentinput1'
                    placeholder='Cardholder number'
                  />
                </label>

                <div className='buynow__pay2'>
                  <label className='buynow__paymentlabel2'>
                    <input
                      type='number'
                      className='buynow__paymentinput2'
                      placeholder='CVV'
                    />
                  </label>
                  <label className='buynow__paymentlabel2'>
                    <input
                      type='number'
                      className='buynow__paymentinput2'
                      placeholder='Expiry'
                    />
                  </label>
                </div>
                <div className='buynow__button'>
                  <button className='buynow__btn'>Save and continue</button>
                </div>
              </form>
            </div>
          )}
        </div>

        <div className='buynow__b'>
          <div className='buynow__container'>
            <div className='buynow__lead'>
              <h3 className='buynow__order'>Your order</h3>
            </div>

            <div className='buynow__image'>
              <img src={buy} alt='order' className='buynow__photo' />
            </div>
            <div className='buynow__product'>
              <h3 className='buynow__item'>Macbook Pro</h3>
              <p className='buynow__price'>NGN 950, 000</p>
              <p className='buynow__unit'>
                Quantity: <span className='amount'>1</span>
              </p>
            </div>
            <hr className=' buynow__line' />

            <div className='buynow__total'>
              <div className='buynow__subtotal'>
                <p className='buynow__sub'>Subtotal</p>
                <p className='buynow__sum'>NGN 950, 000</p>
              </div>

              <div className='buynow__subtotal'>
                <p className='buynow__sub'>Subtotal</p>
                <p className='buynow__sum'>NGN 950, 000</p>
              </div>
            </div>
            <hr className=' buynow__line' />

            <div className='buynow__grand'>
              <div className='buynow__due'>
                <p className='buynow__fee'>Total Due</p>
                <p className='buynow__fee'>NGN 950, 500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyNow;
