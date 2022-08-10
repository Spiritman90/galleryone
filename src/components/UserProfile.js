import React, { useState } from "react";
import Wallet from "../customicons/Wallet";
import Avatar from "../customicons/Avatar";
import Wallet2 from "../customicons/Wallet2";
import Logout from "../customicons/Logout";
import { useNavigate } from "react-router";
import Modal from "../components/Modal";
import Confirm from "../components/Confirm";
import FundWallet from "./FundWallet";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFundWallet, setShowFundWallet] = useState(false);
  // const { newBalance } = useSelector(
  //   (state) => state.wallet?.walletBalance?.balance
  // );
  // console.log(walletBalance);

  const hideModal = (ele) => {
    ele === "fundWallet"
      ? setShowFundWallet(!FundWallet)
      : setShowModal(!showModal);
  };

  const navigate = useNavigate();
  // const handleClick = () => {};
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
        <h4>0</h4>
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
