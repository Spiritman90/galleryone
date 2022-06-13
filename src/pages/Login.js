import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Google from "../customicons/Google";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");

    console.log(email, password);
  };
  return (
    <>
      <div className='auth-form'>
        {email.length !== 0 && (
          <div className='login-email'>
            <p>Email</p>
          </div>
        )}

        {password.length !== 0 && (
          <div className='login-password'>
            <p>Password</p>
          </div>
        )}
        <form className='form-group' onSubmit={handleSubmit}>
          <div className='auth-form__heading'>
            <h2>Sign In</h2>
            <p>Fill in your personal information below</p>
          </div>

          <label>
            <input
              type='email'
              placeholder='Email'
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <input
              type='password'
              placeholder='Password'
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <div className='buttons'>
            <button className='create-btn'>Login</button>
            <button className='sign-btn'>
              {" "}
              <Google className='google' />
              Google login{" "}
            </button>
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
