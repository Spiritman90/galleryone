import React from "react";
import { Link } from "react-router-dom";

const ForgotPasswordOne = () => {
  return (
    <section className='forgot'>
      <div className='forgot__link'>
        <Link to='/login' className='forgot__linked'>
          Return to login
        </Link>
      </div>

      <div className='forgot__body'>
        <h3 className='forgot__heading'>Forgot password?</h3>
        <form className='forgot__form'>
          <label className='forgot__label'>
            <input type='text' placeholder='Email' className='forgot__input' />
          </label>
          <p className='forgot__text'>
            Didn’t receive an email from us?<span>Resend</span>{" "}
          </p>

          <div className='forgot__button'>
            <button className='forgot__btn'>Send reset email</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPasswordOne;
