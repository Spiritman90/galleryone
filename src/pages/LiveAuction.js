import React from "react";
import auction from "../assets/Auction.jpg";

const LiveAuction = () => {
  return (
    <section className='live-auction'>
      <div className='auction__item'>
        <img src={auction} alt='auction' className='auction__image' />
      </div>

      <div className='auction__details'>
        <h3 className='auction__name'>Macbook Pro 2020</h3>
        <p className='auction__info'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,{" "}
        </p>
      </div>
      <div className='last__bid'>
        <p className='bid'>
          Your last bid <span>N20000</span>
        </p>
      </div>
      <button className='bid__btn'>Bid NGN 22000</button>
    </section>
  );
};

export default LiveAuction;
