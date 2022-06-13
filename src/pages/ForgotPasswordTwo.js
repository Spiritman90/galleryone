import React from "react";
import { Link } from "react-router-dom";

const ForgotPasswordTwo = () => {
  return (
    <section className='forget'>
      <div className='forget__link'>
        <Link to='/login' className='forget__linked'>
          Go back
        </Link>
      </div>

      <div className='forget__body'>
        <h3 className='forget__heading'>Reset your password</h3>
        <form className='forget__form'>
          <label className='forget__label'>
            <input
              type='text'
              placeholder='Enter New Password'
              className='forget__input'
            />
          </label>

          <label className='forget__label'>
            <input
              type='text'
              placeholder='Confirm Password'
              className='forget__input'
            />
          </label>

          <div className='forget__button'>
            <button className='forget__btn'>Reset</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPasswordTwo;
