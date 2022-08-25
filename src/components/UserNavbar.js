import React, { useState } from "react";
import Logo from "../customicons/Logo";
import User from "../customicons/User";
import Arrow from "../customicons/Arrow";
import SearhBar from "./SearhBar";
import { Link, NavLink } from "react-router-dom";
import UserProfile from "./UserProfile";
import Bag from "../customicons/Bag";
import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../redux/wallet/walletSlice";

const UserNavbar = () => {
  const [showUserProfile, setShowUserProfile] = useState(false);
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClick = () => {
    setShowUserProfile((prev) => !prev);
    if (showUserProfile === false) {
      dispatch(getBalance());
    }
  };
  return (
    <nav className='user__navbar'>
      <Link className='navbar__logo' to='/'>
        <Logo className='navbar_logo' />
      </Link>
      <ul className='navbar__list'>
        <NavLink to='/liveauction'>
          <li className='navbar__item'>Live Auction</li>
        </NavLink>
        <NavLink to='/sell'>
          <li className='navbar__item'>Sell an Item</li>
        </NavLink>
      </ul>
      <div className='search-bar'>
        <SearhBar />
      </div>
      <Link to='/cart'>
        <div className='bagg-container'>
          <Bag className='bagg' />
          <span className='bagg-quantity'>
            <span className='bagg-unit'>{cartTotalQuantity}</span>
          </span>
        </div>
      </Link>

      <button className='user' onClick={handleClick}>
        <User className='user__image' />
        <Arrow />
      </button>
      {showUserProfile ? <UserProfile /> : null}
    </nav>
  );
};

export default UserNavbar;
