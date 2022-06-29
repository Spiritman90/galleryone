import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditProfile from "../customicons/EditProfile";

const Personal = () => {
  const [disable, setDisable] = useState(true);

  return (
    <section className='sell__information'>
      <div className='sell__padding'>
        <div className='personal'>
          <div className='personal__edit'>
            <EditProfile className='personal__icon' />
          </div>
          <div className='personal__button'>
            <button
              className='personal__btn'
              onClick={() => setDisable(!disable)}
            >
              Edit Information
            </button>
          </div>
        </div>

        <div className='personal__details'>
          <form className='personal__form'>
            <label className='personal__label'>
              First name
              <input
                type='text'
                placeholder='Ada'
                className='personal__input'
                disabled={disable}
              />
            </label>

            <label className='personal__label'>
              Last name
              <input
                type='text'
                placeholder='Babalola'
                className='personal__input'
                disabled={disable}
              />
            </label>
            <label className='personal__label'>
              Email
              <input
                type='email'
                placeholder='ada@gmail.com'
                className='personal__input'
                disabled={disable}
              />
            </label>
            <label className='personal__label'>
              Phone number
              <input
                type='number'
                placeholder='08023456784'
                className='personal__input'
                disabled={disable}
              />
            </label>
            <label className='personal__label'>
              Address
              <input
                type='text'
                placeholder='123 ABC Street,off Akinola Kingsway road'
                className='personal__input'
                disabled={disable}
              />
            </label>
            <label className='personal__label'>
              Date of birth
              <input
                type='text'
                placeholder='11/12/1977'
                className='personal__input'
                disabled={disable}
              />
            </label>

            <label className='personal__label'>
              ID Type
              <input
                type='number'
                placeholder='NIN'
                className='personal__input'
                disabled={disable}
              />
            </label>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Personal;
