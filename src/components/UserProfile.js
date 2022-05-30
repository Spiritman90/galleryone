import React from "react";
import Wallet from "../customicons/Wallet";
import Avatar from "../customicons/Avatar";
import Wallet2 from "../customicons/Wallet2";
import Logout from "../customicons/Logout";
import { useNavigate } from "react-router";

const UserProfile = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // console.log("clicked");
    navigate("/login");
  };
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
        {/* <hr /> */}
      </div>
      <div className='user__actions'>
        <div className='user__account'>
          <Avatar /> <span></span>
          <p>My Account</p>
        </div>
        <div className='user__wallet'>
          <Wallet2 />
          <p>Fund Wallet</p>
        </div>
        <div onClick={handleClick} className='user__logout'>
          <Logout />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
