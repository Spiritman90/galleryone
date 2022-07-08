import React from "react";
import { Link } from "react-router-dom";
import { Outlet} from "react-router";
import AuthLogo from "../customicons/AuthLogo";

function AuthWrapper() {
  return (
    <div className='auth'>
      <header>
       <Link to="/">
        <AuthLogo className='auth__logo' />
      </Link>
      </header>
      <Outlet />
    </div>
  );
}

export default AuthWrapper;
