import React, { useState } from "react";

const FundWallet = () => {
  const [showReply, setShowReply] = useState(false);
  return (
    <section className='fund'>
      <div className='fund__lead'>
        <h2 className='fund__heading'>Fund your wallet</h2>
      </div>

      <div className='fund__text'>
        <p className='fund__amount'>
          Fund with a minimum of 100,000 to continue
        </p>
      </div>

      <div className='fund__reason' onClick={() => setShowReply(!showReply)}>
        <p className='fund__why'>Why do I have to pay?</p>
      </div>
      {showReply && (
        <div className='fund__answer'>
          <p className='fund__reply'>
            We do this to ensure that the bidder has the liquidity to pay for
            any item they win without delay.
          </p>
        </div>
      )}

      <form className='fund__form'>
        <label className='fund__label'>
          <input
            type='text'
            className='fund__input'
            placeholder='Cardholder name'
          />
        </label>

        <label className='fund__label'>
          <input
            type='number'
            className='fund__input'
            placeholder='Cardholder number'
          />
        </label>

        <div className='fund__special'>
          <label htmlFor='' className='fund__label2'>
            <input type='number' className='fund__input2' placeholder='CVV' />
          </label>

          <label htmlFor='' className='fund__label2'>
            <input
              type='number'
              className='fund__input2'
              placeholder='Expiry '
            />
          </label>
        </div>

        <div className='fund__button'>
          <button className='fund__btn'>Pay 100, 000</button>
        </div>
      </form>
    </section>
  );
};

export default FundWallet;
