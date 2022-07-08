import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { verify, reset } from "../redux/auth/authSlice";
import Spinner from "../components/Spinner";
const EmailVerification = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState({
    first: "",
    second: "",
    third: "",
    fifth: "",
    sixth: "",
  });
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
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
      navigate("/login");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleVerify = () => {
    const verifyData = {
      email: email,
      ConfirmCode: code,
    };

    dispatch(verify(verifyData));
    dispatch(reset());
    if (isLoading) {
      return <Spinner />;
    }
    // navigate("/login")
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
                  className='email__otp-input'
                  name={item.name}
                  onChange={(e) => receiveCode(e)}
                />
              </label>
            );
          })}
        </div>
        <p className='email__otp-resend'>Resend OTP?</p>
        <div className='email__button'>
          {!isLoading && <button className='email__btn-verify'>Verify</button>}
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
