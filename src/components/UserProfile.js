import React, { useState } from "react";
import Wallet from "../customicons/Wallet";
import Avatar from "../customicons/Avatar";
import Wallet2 from "../customicons/Wallet2";
import Logout from "../customicons/Logout";
import { useNavigate } from "react-router";
import Modal from "../components/Modal";
import Confirm from "../components/Confirm";
import FundWallet from "./FundWallet";
// import SuccessfulBid from "./SuccessfulBid";
// import SoldOut from "../components/SoldOut";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFundWallet, setShowFundWallet] = useState(false);
  const navigate = useNavigate();

  const { currentBalance } = useSelector((state) => state?.wallet);
  const { isLoading } = useSelector((state) => state.wallet);

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
        {isLoading && (
          <p>
            <strong>
              <i>Fetching balance...</i>
            </strong>
          </p>
        )}
        {!isLoading && <h4>NGN {currentBalance}</h4>}
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
            {/* <SuccessfulBid /> */}
            {/* <SoldOut /> */}
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
