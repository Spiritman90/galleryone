import React from "react";
import { Outlet } from "react-router";
import AuthLogo from "../customicons/AuthLogo";

function AuthWrapper() {
  return (
    <div className='auth'>
      <header>
        <AuthLogo className='auth__logo' />
      </header>
      <Outlet />
    </div>
  );
}

export default AuthWrapper;
