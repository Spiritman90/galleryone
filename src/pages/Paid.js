import React from "react";
import check from "../assets/Check.png";
// import crypto from "crypto";

const Paid = () => {
  return (
    <section className='paid'>
      <div className='paid__image'>
        <img src={check} alt='check' className='paid__photo' />
      </div>

      <div className='paid__content'>
        <p className='paid__text'>Payment processed</p>
      </div>
    </section>
  );
};

export default Paid;
