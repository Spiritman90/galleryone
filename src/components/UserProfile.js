import React, { useState, useEffect } from "react";
import Wallet from "../customicons/Wallet";
import Avatar from "../customicons/Avatar";
import Wallet2 from "../customicons/Wallet2";
import Logout from "../customicons/Logout";
import { useNavigate } from "react-router";
// import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import { toast } from "react-toastify";
import Confirm from "../components/Confirm";
import FundWallet from "./FundWallet";
import Spinner from "../components/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { getBalance, reset } from "../redux/wallet/walletSlice";

const UserProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFundWallet, setShowFundWallet] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { newBalance } = useSelector(
  //   (state) => state.wallet?.walletBalance?.balance
  // );
  // console.log(newBalance);

  // const { isLoading, isError, isSuccess, message } = useSelector(
  //   (state) => state.wallet
  // );

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //   }

  //   if (isSuccess) {
  //     // toast.success("Redirecting....");
  //   }

  //   dispatch(reset());
  //   // dispatch(getBalance());

  //   if (isLoading) {
  //     return <Spinner />;
  //   }
  // }, [isError, isSuccess, message, dispatch]);

  const hideModal = (ele) => {
    ele === "fundWallet"
      ? setShowFundWallet(!FundWallet)
      : setShowModal(!showModal);
  };

  return (
    <div className='user__profile'>
      <div className='user__balance'>
        <div className='wallet__balance'>
          <div>
            <Wallet />
          </div>
          <div>
            <span>
              <p style={{ color: "#636870", fontWeight: "1rem" }}>
                Wallet Balance
              </p>
            </span>
          </div>
        </div>
        <h4>NGN 0.00</h4>
      </div>
      <div className='user__actions'>
        <div
          className='user__account'
          onClick={() => navigate("/sell/profile")}
        >
          <div>
            <Avatar />
          </div>
          <div>
            <p className='user__text'>My Account</p>
          </div>
        </div>
        <div
          className='user__wallet'
          onClick={() => setShowFundWallet(!showFundWallet)}
        >
          <Wallet2 />
          <p className='user__text'>Fund Wallet</p>
        </div>

        {showFundWallet && (
          <Modal comp={"fundWallet"} hideModal={hideModal}>
            <FundWallet />
          </Modal>
        )}

        <div onClick={() => setShowModal(!showModal)} className='user__logout'>
          <Logout />
          <p className='user__text'>Logout</p>
        </div>
      </div>
      {showModal && (
        <Modal comp={"confirm"} hideModal={hideModal}>
          <Confirm setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
};

export default UserProfile;
