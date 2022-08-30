import Logo from "../customicons/Logo";
import SearhBar from "./SearhBar";
import { Link, useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import { FiMenu } from "react-icons/fi";
// import { useState } from "react";
import { useSelector } from "react-redux";
import useWindowSize from "../hooks/useWindowSize";
import LogoMobile from "../customicons/LogoMobile";
import { useEffect, useState } from "react";

const Navbar = () => {
  // const user = localStorage.getItem("token");
  // const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const { width } = useWindowSize();

  const showMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    if (width > 528) {
      setShowMenu(false);
    }
  }, [width]);

  return (
    <>
      {user ? (
        <UserNavbar />
      ) : (
        <nav className='navbar'>
          <Link className='navbar__logo' to='/'>
            {width < 528 ? <LogoMobile /> : <Logo />}
          </Link>

          <SearhBar />

          <FiMenu onClick={showMenuHandler} className='hamburger' />

          <div
            className={`navbar__buttons ${showMenu ? "btn_show" : "btn_hide"}`}
          >
            <button onClick={() => navigate("/login")} className='black-btn'>
              Sign In
            </button>
            <button onClick={() => navigate("/signup")} className='orange-btn'>
              Sign Up
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
