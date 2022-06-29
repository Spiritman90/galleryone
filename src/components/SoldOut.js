import React from "react";
import { useNavigate } from "react-router";
// import Sold from "../assets/sold2.png";

const SoldOut = () => {
  const navigate = useNavigate();
  return (
    <section className='soldout'>
      <div className='soldout__lead'>
        <h2 className='soldout__heading'>Sold out!</h2>
      </div>

      <div className='soldout__message'>
        <p className='soldout__text'>Item has been sold to another bidder</p>
      </div>

      <div className='soldout__button'>
        <button className='soldout__btn' onClick={() => navigate("./")}>
          Back to Home page
        </button>
      </div>
    </section>
  );
};

export default SoldOut;
