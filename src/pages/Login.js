import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login, reset } from "../redux/auth/authSlice";
import Spinner from "../components/Spinner";
// import Google from "../customicons/Google";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const userData = {
    email,
    password,
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(userData));
    setEmail("");
    setPassword("");
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className='auth-form'>
        {/* {email.length !== 0 && (
          <div className='login-email'>
            <p>Email</p>
          </div>
        )} */}

        {/* {password.length !== 0 && (
          <div className='login-password'>
            <p>Password</p>
          </div>
        )} */}
        <form className='form-group' onSubmit={handleLogin}>
          <div className='auth-form__heading'>
            <h2>Sign In</h2>
            <p>Fill in your personal information below</p>
          </div>

          <label>
            <input
              type='email'
              placeholder='Email'
              // required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={false}
            />
          </label>
          <label>
            <input
              type='password'
              placeholder='Password'
              // required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <div className='buttons'>
            {!isLoading && (
              <button className='create-btn login-btn' type='submit'>Login</button>
            )}

            {isLoading && (
              <button className='create-btn login-btn' disabled>
                Loading...
              </button>
            )}
            {/* <button className='google-btn'>
              {" "}
              <Google className='google' />
              Google login{" "}
            </button> */}
          </div>
        </form>
      </div>

      <div className='dont'>
        <div className='dont__details'>
          <p className='dont__text'>
            Don’t have an account?{" "}
            <span>
              <Link to='/signup'>Create an account</Link>
            </span>{" "}
          </p>
        </div>

        <div className='dont__link'>
          <Link to='/forgotpasswordone'>Forgot Password?</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
