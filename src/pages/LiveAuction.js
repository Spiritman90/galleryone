import React from "react";
import Burna from "../assets/Newlive.jpg";
import Live from "../customicons/Live";
import Bidders from "../customicons/Bidders";

const LiveAuction = () => {
  return (
    <section className='auction'>
      <div className='auction__wrapper'>
        <div className='auction__item'>
          <img src={Burna} alt='auction' className='auction__image' />
        </div>

        <div className='auction__details'>
          <div className='auction__end'>
            <p className='auction__name'>Auctions ends in</p>
            <h3 className='auction__info'>2hrs 38mins 32secs</h3>
          </div>

          <div className='auction__current'>
            <p className='auction__lead'>Current item</p>
            <h3 className='auction__item'>Burna boy LIVE concert tickets</h3>
            <p className='auction__text'>
              The grammy award winner will be live at the Eko convention centre
              this December, this package includes a pre show meeting and the
              best seat in the house!
            </p>
          </div>

          <div className='auction__bids'>
            <p className='auction__bid'>Your last bid</p>
            <p className='auction__amount'>N20000</p>
          </div>
          <div className='auction__button'>
            <button className='auction__btn'>Bid NGN 22000</button>
          </div>
        </div>
      </div>

      <div className='live'>
        <div className='live__wrapper'>
          <div className='live__lead'>
            <span>
              <Live />
            </span>{" "}
            <h4 className='live__heading'>Live Feed</h4>
          </div>
          <div className='live__bidders'>
            <span>
              <Bidders />
            </span>{" "}
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
