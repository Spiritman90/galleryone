import React from "react";
import { useState } from "react";
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
  );
};

export default Login;
