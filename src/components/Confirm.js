import React from "react";

const Confirm = () => {
  return (
    <div className='confirm'>
      <div className='confirm__heading'>
        <h2>Are you sure?</h2>
      </div>
      <div className='confirm__buttons'>
        <button className='confirm__black'>No, Cancel this</button>
        <button className='confirm__orange'>Yes, Logout</button>
      </div>
    </div>
  );
};

export default Confirm;
