import React from "react";
// import { useNavigate } from "react-router";
import InvalidEmail from "../customicons/InvalidEmail";

const EmailFailure = () => {
  // const navigate = useNavigate();
  return (
    <section className='email-failure'>
      {/* <div className='email-failure__button'>
        <button className='email-failure__btn' onClick={() => navigate("/")}>
          Back to Homepage
        </button>
      </div> */}

      <div className='email-failure__icon'>
        <InvalidEmail />
      </div>
      <div className='email-failure__message'>
        <p className='email__failure__text'>Oops! seems something went wrong</p>
        <p className='email__failure__text2'>
          Kindly ensure that you entered the right email and code.
        </p>
      </div>
    </section>
  );
};

export default EmailFailure;
