import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../customicons/FooterLogo";

const Footer = () => {
  return (
    <footer className='footer'>
      <Link to='/' className='footer__logo'>
        <FooterLogo />
      </Link>
      <div className='features features__feature'>
        <h5 className='features__heading'>Features</h5>
        <ul className='features__list'>
          <li className='features__item'>Live auction</li>
          <li className='features__item'>Purchase an item</li>
          <li className='features__item'>Sell an item</li>
        </ul>
      </div>

      <div className='features features__legal'>
        <h5 className='features__heading'>Legal</h5>
        <ul className='features__list'>
          <li className='features__item'>Privacy Policy</li>
          <li className='features__item'>Terms of Service</li>
        </ul>
      </div>

      <div className='features features__about'>
        <ul className='features__list'>
          <Link to='/about'>
            <li className='features__item'>About</li>
          </Link>
          <Link to='/contact'>
            <li className='features__item'>Contact</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
