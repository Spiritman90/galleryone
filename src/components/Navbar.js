import Logo from "../customicons/Logo";
import SearhBar from "./SearhBar";
import { Link, useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";

const Navbar = () => {
  const user = localStorage.getItem("token");

  const navigate = useNavigate();

  return (
    <>
      {user ? (
        <UserNavbar />
      ) : (
        <nav className='navbar'>
          <Link className='navbar__logo' to='/'>
            <Logo />
          </Link>

          <SearhBar />
          <div className='navbar__buttons'>
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
