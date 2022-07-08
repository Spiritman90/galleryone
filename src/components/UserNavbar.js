import React, { useState } from "react";
import Logo from "../customicons/Logo";
import User from "../customicons/User";
import Arrow from "../customicons/Arrow";
import SearhBar from "./SearhBar";
import { Link, NavLink } from "react-router-dom";
import UserProfile from "./UserProfile";
// import Cart from "../customicons/Cart";
import { useSelector, useDispatch } from "react-redux";

const UserNavbar = () => {
  const [showUserProfile, setShowUserProfile] = useState(false);
  const cart = useSelector((state) => state.cart);

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
      <SearhBar />
      {/* <NavLink to='/cart' className='parent'>
        <div className='bag-container'>
          <Cart className='bag' />
          <span className='bag-quantity'>
            <span className='bag-unit'>{cart.cartTotalQuantity}</span>
          </span>
        </div>
      </NavLink> */}

      <div className='user' onClick={handleClick}>
        <User className='user__image' />
        <Arrow />
      </div>
      {showUserProfile ? <UserProfile /> : null}
    </nav>
  );
};

export default UserNavbar;
