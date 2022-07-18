import React, { useState } from "react";
import Logo from "../customicons/Logo";
import User from "../customicons/User";
import Arrow from "../customicons/Arrow";
import SearhBar from "./SearhBar";
import { Link, NavLink } from "react-router-dom";
import UserProfile from "./UserProfile";
import Bag from "../customicons/Bag";
// import Cart from "../customicons/Cart";
import { useSelector } from "react-redux";

const UserNavbar = () => {
  const [showUserProfile, setShowUserProfile] = useState(false);
  // const cart = useSelector((state) => state.cart);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const handleClick = () => {
    setShowUserProfile(!showUserProfile);
  };
  return (
    <nav className='user__navbar'>
      <Link className='navbar__logo' to='/'>
        <Logo />
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

      <div className='user' onClick={handleClick}>
        <User className='user__image' />
        <Arrow />
      </div>
      {showUserProfile ? <UserProfile /> : null}
    </nav>
  );
};

export default UserNavbar;
