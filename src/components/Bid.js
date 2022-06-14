import React from "react";

const Bid = () => {
  return (
    <section className='bid'>
      <div className='bid__lead'>
        <h2 className='bid__heading'>Make a bid for Macbook Pro 2020</h2>
        <div className='bid__message'>
          <p className='bid__text'>
            This item has a minimum value of NGN 900,000
          </p>
        </div>

        <div className='bid__amount'>
          <form className='bid__form'>
            <label className='bid__label'>
              <input
                type='number'
                placeholder='Enter an amount'
                className='bid__input'
              />
            </label>
            <div className='bid__button'>
              <button className='bid__btn'>Bid</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Bid;
