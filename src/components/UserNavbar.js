import React, { useState } from "react";
import Logo from "../customicons/Logo";
import User from "../customicons/User";
import Arrow from "../customicons/Arrow";
import SearhBar from "./SearhBar";
import { Link, NavLink } from "react-router-dom";
import UserProfile from "./UserProfile";

const UserNavbar = () => {
  const [showUserProfile, setShowUserProfile] = useState(false);

  const handleClick = () => {
    setShowUserProfile(!showUserProfile);
    console.log(showUserProfile);
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
        <li className='navbar__item'>Sell an Item</li>
      </ul>
      <SearhBar />

      <div className='user' onClick={handleClick}>
        <User className='user__image' />
        <Arrow />
      </div>
      {showUserProfile ? <UserProfile /> : null}
    </nav>
  );
};

export default UserNavbar;
