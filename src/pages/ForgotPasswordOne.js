import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { resetPassword, reset } from "../redux/auth/authSlice";

const ForgotPasswordOne = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const userData = {
    email,
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate("/forgotpasswordtwo");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please provide a password");
    } else {
      dispatch(reset());
      dispatch(resetPassword(userData));
      dispatch(reset());
      navigate("/forgotpasswordtwo");
    }
  };

  return (
    <section className='forgot'>
      <div className='forgot__link'>
        <Link to='/login' className='forgot__linked'>
          Return to login
        </Link>
      </div>

      <div className='forgot__body'>
        <h3 className='forgot__heading'>Forgot password?</h3>
        <form className='forgot__form' onSubmit={handleReset}>
          <label className='forgot__label'>
            <input
              type='text'
              placeholder='Email'
              className='forgot__input'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <p className='forgot__text'>
            Didn’t receive an email from us?
            <button className='forgot__resend' onClick={handleReset}>
              Resend
            </button>
          </p>

          <div className='forgot__button'>
            {!isLoading && (
              <button className='forgot__btn' type='submit'>
                Send reset email
              </button>
            )}
            {isLoading && (
              <button className='forgot__btn' type='submit' disabled>
                Please wait....
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPasswordOne;
