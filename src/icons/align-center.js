import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AlignCenter = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 10C5 9.44772 5.44772 9 6 9H18C18.5523 9 19 9.44772 19 10C19 10.5523 18.5523 11 18 11H6C5.44772 11 5 10.5523 5 10Z"
        fill="#46525C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
        fill="#46525C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 14C2 13.4477 2.44772 13 3 13H21C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15H3C2.44772 15 2 14.5523 2 14Z"
        fill="#46525C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 18C5 17.4477 5.44772 17 6 17H18C18.5523 17 19 17.4477 19 18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z"
        fill="#46525C"
      />
    </svg>
  );
});

AlignCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AlignCenter.displayName = 'AlignCenter';

export default AlignCenter;
