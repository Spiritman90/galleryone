// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate, Outlet } from "react-router";
import AuthLogo from "../customicons/AuthLogo";

function AuthWrapper() {
  // const token = localStorage.getItem("token");
  // const [user, setUser] = useState(token ? token : "");
  // console.log(user);

  // if (user) {
  //   return <Navigate replace to='/' />;
  // }

  return (
    <div className='auth'>
      <header>
        <Link to='/'>
          <AuthLogo className='auth__logo' />
        </Link>
      </header>
      <Outlet />
    </div>
  );
}

export default AuthWrapper;
