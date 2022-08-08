import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { verify, reset } from "../redux/auth/authSlice";
import Spinner from "../components/Spinner";
import { PinInput } from "react-input-pin-code";
const EmailVerification = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [data, setData] = useState({ email: "", ConfirmCode: "" });
  const [values, setValues] = useState(["", "", "", "", "", ""]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      navigate("/email-failure");
    }

    if (isSuccess) {
      navigate("/email-success");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onPinInputChange = (value, index, pinVal) => {
    setValues([...pinVal]);
    setData((prev) => ({ ...prev, ConfirmCode: pinVal.join("") }));
  };

  const handleVerify = (e) => {
    e.preventDefault();
    dispatch(verify(data));
    dispatch(reset());
    if (isLoading) {
      return <Spinner />;
    }
    navigate("/email-success");
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
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
            value={data.email}
          />
        </label>
        <p className='email__otp-text'>Enter OTP</p>
        <div className='email__otp'>
          <PinInput
            inputClassName='email__otp-input'
            inputStyle={{
              width: 64,
              height: 64,
              padding: 0,
              backgroundColor: "#07090D",
              // border: "1px solid #BDBDBD",
              // outline: "none",
            }}
            containerClassName='email__otp'
            // containerStyle={{ flex: "1" }}
            type='number'
            inputMode='numeric'
            length={6}
            placeholder={""}
            values={values}
            mask={true}
            focusBorderColor='#eb861e'
            size='lg'
            onChange={onPinInputChange}
            background='red'
            borderColor='#BDBDBD'
          />
        </div>
        <button className='email__otp-resend' onClick={handleVerify}>
          Resend OTP?
        </button>
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
