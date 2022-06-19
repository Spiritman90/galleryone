import React from "react";

const DeleteIcon = ({ className }) => {
  return (
    <div>
      <svg
        width='19'
        height='20'
        viewBox='0 0 19 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M17.9971 4H14.9971V2.125C14.9971 1.29766 14.3244 0.625 13.4971 0.625H5.99707C5.16973 0.625 4.49707 1.29766 4.49707 2.125V4H1.49707C1.08223 4 0.74707 4.33516 0.74707 4.75V5.5C0.74707 5.60313 0.831445 5.6875 0.93457 5.6875H2.3502L2.9291 17.9453C2.9666 18.7445 3.62754 19.375 4.42676 19.375H15.0674C15.8689 19.375 16.5275 18.7469 16.565 17.9453L17.1439 5.6875H18.5596C18.6627 5.6875 18.7471 5.60313 18.7471 5.5V4.75C18.7471 4.33516 18.4119 4 17.9971 4ZM13.3096 4H6.18457V2.3125H13.3096V4Z'
          fill='#636870'
        />
      </svg>
    </div>
  );
};

export default DeleteIcon;
