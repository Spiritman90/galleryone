import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import { fundWallet, reset } from "../redux/wallet/walletSlice";

const FundWallet = () => {
  const [showReply, setShowReply] = useState(false);
  const [amount, setAmount] = useState("");
  const { walletBalance, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.wallet
  );
  const { token } = useSelector((state) => state.auth.user);

  const data = {
    amount,
  };

  console.log(data);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success("Successful payment");
      navigate("/");
    }

    dispatch(reset());
  }, [walletBalance, isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) {
      toast.error("Please enter an amount");
    } else {
      dispatch(reset());
      dispatch(fundWallet(data, token));
    }

    setAmount("");
  };

  return (
    <section className='fund'>
      <div className='fund__lead'>
        <h2 className='fund__heading'>Fund your wallet</h2>
      </div>

      <div className='fund__text'>
        <p className='fund__amount'>
          Fund with a minimum of 10,000 to continue
        </p>
      </div>

      <div className='fund__reason' onClick={() => setShowReply(!showReply)}>
        <p className='fund__why'>Why do I have to pay?</p>
      </div>
      {showReply && (
        <div className='fund__answer'>
          <p className='fund__reply'>
            We do this to ensure that the bidder has the liquidity to pay for
            any item they win without delay.
          </p>
        </div>
      )}

      <form className='fund__form' onSubmit={handleSubmit}>
        <label className='fund__label'>
          <input
            type='text'
            className='fund__input'
            placeholder='Amount'
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>

        <div className='fund__button'>
          {!isLoading && (
            <button className='fund__btn' type='submit'>
              Pay {amount}
            </button>
          )}
          {isLoading && (
            <button className='fund__btn' type='submit'>
              Processing payment...
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default FundWallet;
