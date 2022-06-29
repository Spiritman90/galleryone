import React from "react";

const Cart = ({ className }) => {
  return (
    <div>
      <svg
        width='84'
        height='84'
        viewBox='0 0 84 84'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <g filter='url(#filter0_d_383_1778)'>
          <circle cx='38' cy='38' r='32' fill='#636870' />
          <path
            d='M51.62 30.5C51.3608 30.051 50.9897 29.6767 50.5428 29.4138C50.0958 29.1509 49.5884 29.0084 49.07 29H29.87L29 25.61C28.9121 25.2828 28.716 24.9949 28.4436 24.7934C28.1712 24.5918 27.8386 24.4884 27.5 24.5H24.5C24.1022 24.5 23.7206 24.6581 23.4393 24.9394C23.158 25.2207 23 25.6022 23 26C23 26.3978 23.158 26.7794 23.4393 27.0607C23.7206 27.342 24.1022 27.5 24.5 27.5H26.36L30.5 42.89C30.5879 43.2173 30.784 43.5051 31.0564 43.7067C31.3288 43.9082 31.6614 44.0116 32 44H45.5C45.777 43.9992 46.0484 43.9217 46.284 43.776C46.5196 43.6304 46.7104 43.4224 46.835 43.175L51.755 33.335C51.9682 32.888 52.0675 32.3952 52.044 31.9005C52.0204 31.4059 51.8748 30.9247 51.62 30.5Z'
            fill='#FBE7D2'
          />
          <path
            d='M31.25 51.5C32.4926 51.5 33.5 50.4926 33.5 49.25C33.5 48.0074 32.4926 47 31.25 47C30.0074 47 29 48.0074 29 49.25C29 50.4926 30.0074 51.5 31.25 51.5Z'
            fill='#FBE7D2'
          />
          <path
            d='M46.25 51.5C47.4926 51.5 48.5 50.4926 48.5 49.25C48.5 48.0074 47.4926 47 46.25 47C45.0074 47 44 48.0074 44 49.25C44 50.4926 45.0074 51.5 46.25 51.5Z'
            fill='#FBE7D2'
          />
        </g>
        <defs>
          <filter
            id='filter0_d_383_1778'
            x='0'
            y='0'
            width='84'
            height='84'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dx='4' dy='4' />
            <feGaussianBlur stdDeviation='5' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_383_1778'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_383_1778'
              result='shape'
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Cart;
