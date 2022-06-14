import React from "react";

const Live = ({ className }) => {
  return (
    <div>
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <circle cx='8' cy='8' r='8' fill='#EB5757' />
      </svg>
    </div>
  );
};

export default Live;
