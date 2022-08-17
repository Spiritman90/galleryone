import React from "react";
import Placard from "../customicons/Placard";

const Error = () => {
  return (
    <div className='error__page'>
      <div className='error__image'>
        <Placard />
      </div>
      <h4 className='error__heading'>Oops! We did not find anything</h4>
    </div>
  );
};

export default Error;
