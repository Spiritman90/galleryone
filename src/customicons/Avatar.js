import React from "react";

const Avatar = ({ className }) => {
  return (
    <div>
      <svg
        width='18'
        height='18'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM9 3C10.93 3 12.5 4.57 12.5 6.5C12.5 8.43 10.93 10 9 10C7.07 10 5.5 8.43 5.5 6.5C5.5 4.57 7.07 3 9 3ZM16 16H2V15.77C2 15.15 2.28 14.57 2.76 14.19C4.47 12.82 6.64 12 9 12C11.36 12 13.53 12.82 15.24 14.19C15.72 14.57 16 15.16 16 15.77V16Z'
          fill='#EFEFEF'
        />
      </svg>
    </div>
  );
};

export default Avatar;
