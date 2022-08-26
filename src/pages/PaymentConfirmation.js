import React, { useEffect } from "react";
import check from "../assets/Check.png";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { confirmPayment, reset } from "../redux/wallet/walletSlice";

const PaymentConfirmation = () => {
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.wallet
  );
  const { walletBalance } = useSelector((state) => state.wallet);

  const resp = walletBalance?.newBalance?.response;
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
      toast.success(resp, "Wallet funded successfully");
    }
    // dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch, resp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reset());
    dispatch(confirmPayment(myRef));
    navigate("/");
    // toast.success(resp, "Wallet funded successfully");
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
