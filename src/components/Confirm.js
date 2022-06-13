import React from "react";
import { useNavigate } from "react-router";

const Confirm = ({ setShowModal }) => {
  const navigate = useNavigate();
  return (
    <div className='confirm'>
      <div className='confirm__heading'>
        <h2>Are you sure?</h2>
      </div>
      <div className='confirm__buttons'>
        <button className='confirm__black' onClick={() => setShowModal(false)}>
          No, Cancel this
        </button>
        <button className='confirm__orange' onClick={() => navigate("/login")}>
          Yes, Logout
        </button>
      </div>
    </div>
  );
};

export default Confirm;
