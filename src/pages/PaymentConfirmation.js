import React from "react";
import check from "../assets/Check.png";
// import crypto from "crypto";

const PaymentConfirmation = () => {
  return (
    <section className='paid'>
      <div className='paid__image'>
        <img src={check} alt='check' className='paid__photo' />
      </div>

      <div className='paid__content'>
        <p className='paid__text'>
          Your payment is being processed, kindly click the button below to
          confirm payment.
        </p>
      </div>

      <div className='paid__button'>
        <button className='paid__btn'>Confirm payment</button>
      </div>
    </section>
  );
};

export default PaymentConfirmation;
