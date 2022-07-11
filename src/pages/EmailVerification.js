import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { verify, reset } from "../redux/auth/authSlice";
import Spinner from "../components/Spinner";
const EmailVerification = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [email, setEmail] = useState("");
  const [code, setCode] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
  });

  const codeToString = (
    code.first +
    code.second +
    code.third +
    code.fourth +
    code.fifth +
    code.sixth
  ).toString();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const codeInput = [
    { id: 1, name: "first" },
    { id: 2, name: "second" },
    { id: 3, name: "third" },
    { id: 4, name: "fourth" },
    { id: 5, name: "fifth" },
    { id: 6, name: "sixth" },
  ];

  const receiveCode = (e) => {
    e.preventDefault();
    setCode({ ...code, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isError) {
      navigate("/email-failure");
    }

    if (isSuccess) {
      navigate("/email-success");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleVerify = (e) => {
    e.preventDefault();
    const verifyData = {
      email: email,
      ConfirmCode: codeToString,
    };

    dispatch(verify(verifyData));
    dispatch(reset());
    if (isLoading) {
      return <Spinner />;
    }
    navigate("/email-success");
    setEmail("");
    setCode("");
  };

  return (
    <section className='email'>
      <div className='email__lead'>
        <h1 className='email__heading'>Email Verification</h1>
        <p className='email__created'>
          Account created successfully, kindly check your email for confirmation
          code.
        </p>
      </div>

      <form className='email__form' onSubmit={handleVerify}>
        <label className='email__label1'>
          <input
            type='text'
            className='email__input1'
            placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <p className='email__otp-text'>Enter OTP</p>
        <div className='email__otp'>
          {codeInput.map((item) => {
            return (
              <label className='email__otp-label' key={item.id}>
                <input
                  type='text'
                  // inputMode='numeric'
                  // pattern='\d{1}'
                  // id='partitioned'
                  autoComplete='off'
                  maxLength={1}
                  className='email__otp-input'
                  name={item.name}
                  onChange={(e) => receiveCode(e)}
                />
              </label>
            );
          })}
        </div>
        <button className='email__otp-resend' onClick={handleVerify}>Resend OTP?</button>
        <div className='email__button'>
          {!isLoading && (
            <button className='email__btn-verify' type='submit'>
              Verify
            </button>
          )}
          {isLoading && (
            <button className='email__btn-verify' disabled>
              Please wait...
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default EmailVerification;
