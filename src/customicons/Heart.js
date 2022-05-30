import React from "react";

const Heart = ({ className }) => {
  return (
    <div>
      <svg
        width='12'
        height='10'
        viewBox='0 0 12 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M8.62031 0.140625C7.47813 0.140625 6.4875 0.778125 6 1.70937C5.5125 0.778125 4.52187 0.140625 3.37969 0.140625C1.75469 0.140625 0.4375 1.43125 0.4375 3.02344C0.4375 6.16719 6 9.73125 6 9.73125C6 9.73125 11.5625 6.16719 11.5625 3.02344C11.5625 1.43125 10.2453 0.140625 8.62031 0.140625Z'
          fill='#333333'
        />
      </svg>
    </div>
  );
};

export default Heart;
