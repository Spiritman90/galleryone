import React from "react";
// import { useNavigate } from "react-router";
import ErrorIcon from "../assets/Error.svg";

const Error = () => {
  return (
    <>
      <div className='error__page'>
        <div className='error__image'>
          <img src={ErrorIcon} alt='icon' />
        </div>
        <h4 className='error__heading'>Oops! We did not find anything</h4>
        {/* <button onClick={() => navigate("/")} className='error__btn'>
          Take me home
        </button> */}
      </div>
    </>
  );
};

export default Error;
