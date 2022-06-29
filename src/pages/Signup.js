import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "../redux/auth/authSlice";
import Spinner from "../components/Spinner";
import Google from "../customicons/Google";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const userData = {
    firstName,
    lastName,
    email,
    password,
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset);
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      toast.error("Please provide a password");
    } else {
      dispatch(register(userData));
    }
    if (isLoading) {
      return <Spinner />;
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
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
              className='name__input name__inputb'
              placeholder='First name'
              required
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </label>

          <label className='name__label'>
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
          {!isLoading && (
            <button className='create-btn'>Create an account</button>
          )}
          {isLoading && (
            <button className='create-btn' disabled>
              Loading...
            </button>
          )}
          <button className='sign-btn' onClick={() => navigate("/login")}>
            Sign in
          </button>
          <hr className='line' />
          <button type='submit' className='google-btn'>
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
