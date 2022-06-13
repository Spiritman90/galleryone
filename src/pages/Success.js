import React from "react";
import success from "../assets/success.png";

const Success = () => {
  return (
    <section className='success'>
      <div className='sucess__image'>
        <img src={success} alt='success' className='success__photo' />
      </div>

      <div className='success__message'>
        <p className='success__text'>We received your order</p>
      </div>
    </section>
  );
};

export default Success;
