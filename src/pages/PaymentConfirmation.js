import React, { useState, useEffect } from "react";
import check from "../assets/Check.png";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { confirmPayment, reset } from "../redux/wallet/walletSlice";

const PaymentConfirmation = () => {
  // const [amount, setAmount] = useState("");
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.wallet
  );
  const { walletBalance } = useSelector((state) => state.wallet);

  console.log(walletBalance);
  const ref = window.location.href;
  const reference = ref.split("=")[2];

  const myRef = {
    reference,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success("Success, please check your wallet");
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(reset());
    dispatch(confirmPayment(myRef));
  };

  return (
    <section className='paid'>
      <div className='paid__image'>
        <img src={check} alt='check' className='paid__photo' />
      </div>

      <div className='paid__content'>
        <p className='paid__text'>
          Your payment is being processed, kindly click the button below to
          confirm payment.
        </p>
      </div>

      <div className='paid__button'>
        {!isLoading && (
          <button className='paid__btn' type='submit' onClick={handleSubmit}>
            Confirm payment
          </button>
        )}
        {isLoading && (
          <button
            className='paid__btn'
            type='submit'
            disabled
            onClick={handleSubmit}
          >
            Confirming payment...
          </button>
        )}
      </div>
    </section>
  );
};

export default PaymentConfirmation;
