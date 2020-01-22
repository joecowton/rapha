import React from 'react';

export default () => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path id="z" d="M7.582 7.01h7.582V0H0v7.01z"></path>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(0 9)">
        <mask id="c" fill="#fff">
          <use xlinkHref="#z" />
        </mask>
        <path
          d="M1.996 7.01c.3-2.82 2.686-5.017 5.586-5.017 2.9 0 5.285 2.197 5.585 5.017h1.997C14.856 3.088 11.584 0 7.582 0 3.582 0 .308 3.088 0 7.01h1.996z"
          fill="#000"
          mask="url(#c)"
        ></path>
      </g>
      <circle stroke="#000" stroke-width="2" cx="7.5" cy="3.5" r="2.5"></circle>
    </g>
  </svg>
);
