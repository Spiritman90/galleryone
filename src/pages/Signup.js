import React from "react";
import { useState } from "react";
import Google from "../customicons/Google";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");

    console.log(name);
    console.log(email);
    console.log(password);
  };

  return (
    <div className='auth-form'>
      {name.length !== 0 && (
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
      )}
      <form className='form-group' onSubmit={handleSubmit}>
        <div className='auth-form__heading'>
          <h2>Sign Up</h2>
          <p>Fill in your personal information below</p>
        </div>

        <label>
          <input
            type='text'
            placeholder='Full name'
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
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
          <button className='create-btn'>Create an account</button>
          <button className='sign-btn'>
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
