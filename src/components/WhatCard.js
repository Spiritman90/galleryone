import React from "react";

const WhatCard = ({ heading, message }) => {
  return (
    <div className='card'>
      <div className='card__lead'>
        <h4 className=' card__heading'>{heading}</h4>
      </div>

      <div className='card__message'>
        <p className='card__text'>{message}</p>
      </div>
    </div>
  );
};

export default WhatCard;
