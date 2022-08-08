import React from "react";
import sold from "../assets/sold2.png";
import { useNavigate } from "react-router";

const SuccessfulBid = () => {
  const navigate = useNavigate();
  return (
    <section className='successful'>
      <div className='successful__image'>
        <img src={sold} alt='' className='successful__photo' />
      </div>

      <div className='successful__lead'>
        <h2 className='successful__heading'>Sold!</h2>
      </div>

      <div className='successful__message'>
        <p className='successful__text'>Your bid was successful!</p>
      </div>

      <div className='successful__buttons'>
        <button
          className='successful__dark'
          onClick={() => navigate("/buy-now")}
        >
          Payment checkout
        </button>
        <button className='successful__orange' onClick={() => navigate("/")}>
          Pay with wallet
        </button>
      </div>
    </section>
  );
};

export default SuccessfulBid;
