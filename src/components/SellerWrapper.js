import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const SellerWrapper = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/sell") {
      navigate("/sell/sell_form");
    }
  }, [pathname, navigate]);
  return (
    <section className='sell'>
      <div className='sell__wrapper'>
        <div className='sell__links'>
          <NavLink
            to='profile'
            className={({ isActive }) =>
              isActive ? "sell__info-active" : "sell__info"
            }
          >
            Personal Information
          </NavLink>

          <NavLink
            to='inbox'
            className={({ isActive }) =>
              isActive ? "sell__info-active" : "sell__info"
            }
          >
            Inbox
          </NavLink>

          {/* <NavLink
            to='sell_form'
            className={({ isActive }) =>
              isActive ? "sell__info-active" : "sell__info"
            }
          >
            Sell an item
          </NavLink> */}
          <NavLink
            to='history'
            className={({ isActive }) =>
              isActive ? "sell__info-active" : "sell__info"
            }
          >
            History
          </NavLink>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default SellerWrapper;
