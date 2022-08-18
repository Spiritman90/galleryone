import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import UserNavbar from "./UserNavbar";

function Layout() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {user ? <UserNavbar /> : <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
