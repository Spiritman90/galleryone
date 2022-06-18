import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
// import { useSelector, useDispatch } from "react-redux";

import Google from "../customicons/Google";

const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
  };

  return (
    <div className='auth-form'>
      {/* {name.length !== 0 && (
        <div className='full-name'>
          <p>Full name</p>
        </div>
      )}

      {email.length !== 0 && (
        <div className='email'>
          <p>Email</p>
        </div>
      )}
      {password.length !== 0 && (
        <div className='password'>
          <p>Password</p>
        </div>
      )} */}
      <form className='form-group' onSubmit={handleSubmit}>
        <div className='auth-form__heading'>
          <h2>Sign Up</h2>
          <p>Fill in your personal information below</p>
        </div>

        <div className='name__auth'>
          <label className='name__label'>
            <input
              type='text'
              className='name__input'
              placeholder='First name'
              required
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </label>

          <label className='name__input'>
            <input
              className='name__input'
              type='text'
              placeholder='Last name'
              required
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </label>
        </div>

        <label>
          <input
            type='password'
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
          <button className='create-btn'>Create an account</button>
          <button className='sign-btn' onClick={() => navigate("/login")}>
            Sign in
          </button>
          <hr className='line' />
          <button className='google-btn'>
            {" "}
            <Google className='google' />
            Google sign up{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
