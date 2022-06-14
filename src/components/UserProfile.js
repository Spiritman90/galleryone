import React, { useState } from "react";
import Wallet from "../customicons/Wallet";
import Avatar from "../customicons/Avatar";
import Wallet2 from "../customicons/Wallet2";
import Logout from "../customicons/Logout";
import { useNavigate } from "react-router";
import Modal from "../components/Modal";
import Confirm from "../components/Confirm";
import FundWallet from "./FundWallet";

const UserProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFundWallet, setShowFundWallet] = useState(false);

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
          <Wallet />
          <span>
            <p>Wallet Balance</p>
          </span>
        </div>
        <h4>NGN 20, 000</h4>
      </div>
      <div className='user__actions'>
        <div
          className='user__account'
          onClick={() => navigate("/sell/profile")}
        >
          <Avatar />
          <p>My Account</p>
        </div>
        <div
          className='user__wallet'
          onClick={() => setShowFundWallet(!showFundWallet)}
        >
          <Wallet2 />
          <p>Fund Wallet</p>
        </div>

        {showFundWallet && (
          <Modal comp={"fundWallet"} hideModal={hideModal}>
            <FundWallet />
          </Modal>
        )}

        <div onClick={() => setShowModal(!showModal)} className='user__logout'>
          <Logout />
          <p>Logout</p>
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
