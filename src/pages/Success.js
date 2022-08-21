import React from "react";
// import success from "../assets/success.png";
import Processed from "../customicons/Processed";

const Success = () => {
  return (
    <section className='success'>
      <div className='sucess__image'>
        <Processed />
      </div>

      <div className='success__message'>
        <p className='success__text'>Your payment is successful</p>
      </div>
    </section>
  );
};

export default Success;
