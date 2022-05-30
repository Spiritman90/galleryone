import React from "react";
import { useNavigate } from "react-router";
import ErrorIcon from "../assets/Error.svg";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='error__page'>
        <div className='error__image'>
          <img src={ErrorIcon} alt='icon' />
        </div>

        <div className='error__message'>
          <h4 className='error__heading'>Oops! We did not find anything</h4>
          <div>
            <button onClick={() => navigate("/")} className='error__btn'>
              Take me home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
