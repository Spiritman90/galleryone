import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { confirmPassword, reset } from "../redux/auth/authSlice";

const ForgotPasswordTwo = () => {
  const [email, setEmail] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [retypeNewPassword, setretypeNewPassword] = useState("");
  const [code, setCode] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, message, isConfirmPassword } = useSelector(
    (state) => state.auth
  );

  const userData = {
    email,
    newpassword,
    retypeNewPassword,
    code,
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isConfirmPassword) {
      navigate("/login");
    }

    dispatch(reset());
  }, [isError, message, navigate, dispatch, isConfirmPassword]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newpassword !== retypeNewPassword) {
      toast.error("Password do not match");
    } else {
      dispatch(reset());
      dispatch(confirmPassword(userData));
    }

    setEmail("");
    setnewpassword("");
    setEmail("");
    setretypeNewPassword("");
    setCode("");
  };

  return (
    <section className='forget'>
      <div className='forget__link'>
        <Link to='/login' className='forget__linked'>
          Go back
        </Link>
      </div>

      <div className='forget__body'>
        <h3 className='forget__heading'>{user?.message}</h3>
        <form className='forget__form' onSubmit={handleResetPassword}>
          <label className='forget__label'>
            <input
              type='text'
              placeholder='Email'
              className='forget__input'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label className='forget__label'>
            <input
              type='password'
              placeholder='Enter New Password'
              className='forget__input'
              onChange={(e) => setnewpassword(e.target.value)}
              value={newpassword}
            />
          </label>

          <label className='forget__label'>
            <input
              type='password'
              placeholder='Confirm Password'
              className='forget__input'
              onChange={(e) => setretypeNewPassword(e.target.value)}
              value={retypeNewPassword}
            />
          </label>
          <label className='forget__label'>
            <input
              type='password'
              placeholder='Enter code'
              className='forget__input'
              onChange={(e) => setCode(e.target.value)}
              value={code}
            />
          </label>

          <div className='forget__button'>
            {!isLoading && (
              <button className='forget__btn' type='submit'>
                Reset
              </button>
            )}
            {isLoading && (
              <button className='forget__btn' type='submit' disabled>
                Please wait...
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPasswordTwo;
