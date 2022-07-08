import React from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../redux/auth/authSlice";
const Confirm = ({ setShowModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);

  const handleClick = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/signup");
  };
  return (
    <div className='confirm'>
      <div className='confirm__heading'>
        <h2>Are you sure?</h2>
      </div>
      <div className='confirm__buttons'>
        <button className='confirm__black' onClick={() => setShowModal(false)}>
          No, Cancel this
        </button>
        <button className='confirm__orange' onClick={handleClick}>
          Yes, Logout
        </button>
      </div>
    </div>
  );
};

export default Confirm;
