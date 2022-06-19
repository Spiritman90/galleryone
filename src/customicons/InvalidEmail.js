import React from "react";

const InvalidEmail = ({ className }) => {
  return (
    <div>
      <svg
        width='70'
        height='70'
        viewBox='0 0 70 70'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M34.8355 0C15.6275 0 0 15.701 0 35C0 54.299 15.701 70 35 70C54.299 70 70 54.299 70 35C70 15.701 54.2255 0 34.8355 0ZM38.5 52.5H31.5V45.5H38.5V52.5ZM38.5 38.5H31.5V17.5H38.5V38.5Z'
          fill='#EB5757'
        />
      </svg>
    </div>
  );
};

export default InvalidEmail;
