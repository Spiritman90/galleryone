import React from "react";
import { useNavigate } from "react-router";
import ValidEmail from "../customicons/ValidEmail";

const EmailSuccess = () => {
  const navigate = useNavigate();
  return (
    <section className='email-sucess'>
      <div className='email-success__button'>
        <button className='email-success__btn' onClick={() => navigate("/")}>
          Back to Homepage
        </button>
      </div>

      <div className='email-sucess__icon'>
        <ValidEmail />
        <p className='email__success__text'>You’re now verified</p>
      </div>
    </section>
  );
};

export default EmailSuccess;
