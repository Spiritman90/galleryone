import React from "react";
import contact from "../assets/Contact.jpg";
import map from "../assets/map.jpg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import location from "../assets/location.svg";

const Contact = () => {
  return (
    <section className='contact'>
      <h2 className='contact__heading'>Contact GalleryOne</h2>

      <div className='contact__image'>
        <img src={contact} alt='contact-us' className='contact-image' />
      </div>

      <section className='get'>
        <div className='get__lead'>
          <h3 className='get__heading'>Get in touch with us today</h3>
          <p className='get__text'>
            We’re always here to give you the best service
          </p>
        </div>
        <div className='card__wrapper'>
          <div className='get__card'>
            <img src={phone} alt='phone' className='card__icon' />
            <div className='lead'>
              <h5 className='header__text'>Call Us</h5>
            </div>
            <div className='body'>
              <p className='body__text'>080-GalleryOne</p>
              <p className='body__text'>(+234) 08098723546</p>
              <p className='body__text'>(+234) 08098723546</p>
            </div>
          </div>
          <div className='get__card'>
            <img src={mail} alt='phone' className='card__icon' />
            <div className='lead'>
              <h5 className='header__text'>Send a Mail</h5>
            </div>

            <div className='body'>
              <p className='body__text'>Info@galleryone.com</p>
              <p className='body__text'>Support@galleryone.com</p>
            </div>
          </div>

          <div className='get__card'>
            <img src={location} alt='phone' className='card__icon' />

            <div className='lead'>
              <h5 className='header__text'>Address</h5>
            </div>

            <div className='body'>
              <p className='body__text'>
                16a Fola Jinadu Cres, Gbagada 100266, Lagos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='map'>
        <div className='map__wrapper'>
          <img src={map} alt='map' className='map__image' />
        </div>
      </section>
    </section>
  );
};

export default Contact;
