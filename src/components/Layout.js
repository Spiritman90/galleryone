import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import UserNavbar from "./UserNavbar";

function Layout() {
  return (
    <>
      <Navbar />
      {/* <UserNavbar /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
