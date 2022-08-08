import React from "react";
import { useNavigate } from "react-router";

const Verify = () => {
  const navigate = useNavigate();
  return (
    <section className='sell__information'>
      <div className='sell__padding'>
        <h4 className='sell__heading verify__heading'>Verify Identity</h4>

        <form className='verify__form'>
          <label className='verify__label'>
            <input
              type='file'
              accept='image/*'
              style={{ display: "hidden" }}
              className='verify__input'
              placeholder='Take a Selfie Or Upload Image of your face'
              // required
            />
          </label>
          <div className='verify__wrapper'>
            <label className='verify__names verify__label'>
              <input type='text' placeholder='First name' />
              <input type='text' placeholder='Last name' />
            </label>
            <label className='verify__label'>
              <input
                type='text'
                className='verify__validate'
                placeholder='NIN'
                // required
              />
            </label>
            <label className='verify__label'>
              <input
                type='text'
                className='verify__validate'
                placeholder='Pickup address'
                // required
              />
            </label>
          </div>
          <div className='verify__button'>
            <button className='verify__light' onClick={() => navigate(-1)}>
              Prev
            </button>
            <button className='verify__orange'>Upload item</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Verify;
