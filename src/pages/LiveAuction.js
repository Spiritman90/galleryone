import React from "react";
import auction from "../assets/Auction.jpg";

const LiveAuction = () => {
  return (
    <section className='auction'>
      <div className='auction__wrapper'>
        <div className='auction__item'>
          <img src={auction} alt='auction' className='auction__image' />
        </div>

        <div className='auction__details'>
          <h3 className='auction__name'>Macbook Pro 2020</h3>
          <p className='auction__info'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.{" "}
          </p>
          <div className='last__bid'>
            <p className='bid'>
              Your last bid <span className='bid__price'>N20000</span>
            </p>
          </div>
          <button className='bid__btn'>Bid NGN 22000</button>
        </div>
      </div>

      <div className='live'>
        <div className='live__wrapper'>
          <div className='live__lead'>
            <h4 className='live__heading'>Live Feed</h4>
          </div>

          <div className='live__bidders'>
            <p className='live__bids'>2000 bidders</p>
          </div>
        </div>

        <div className='live__container'>
          <div className='live__actions'>
            <div className='live__details'>
              <p className='live__name'>Yusuf Yakub made a bid of NGN 20000</p>
            </div>
            <div className='live__period'>
              <p className='live__time'>12:00PM</p>
            </div>
          </div>

          <div className='live__actions'>
            <div className='live__details'>
              <p className='live__name'>Yusuf Yakub made a bid of NGN 20000</p>
            </div>
            <div className='live__period'>
              <p className='live__time'>12:00PM</p>
            </div>
          </div>

          <div className='live__actions'>
            <div className='live__details'>
              <p className='live__name'>Yusuf Yakub made a bid of NGN 20000</p>
            </div>
            <div className='live__period'>
              <p className='live__time'>12:00PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveAuction;
