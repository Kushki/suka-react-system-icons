import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PhoneOff = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        d="M5.19006 12.81C3.50591 10.213 2.45441 7.25716 2.12006 4.18C2.09507 3.90346 2.12793 3.62476 2.21656 3.36162C2.30518 3.09849 2.44763 2.85669 2.63482 2.65162C2.82202 2.44655 3.04986 2.28271 3.30385 2.17052C3.55783 2.05833 3.8324 2.00026 4.11006 2H7.11006C7.59536 1.99522 8.06585 2.16708 8.43382 2.48353C8.80179 2.79998 9.04213 3.23944 9.11005 3.72C9.23668 4.68006 9.47151 5.62272 9.81006 6.53C9.9446 6.88792 9.97372 7.27691 9.89396 7.65088C9.81421 8.02484 9.62892 8.36811 9.36005 8.64L8.09006 9.91M10.6801 13.31C11.6949 14.3257 12.8419 15.2003 14.0901 15.91L15.3601 14.64C15.6319 14.3711 15.9752 14.1858 16.3492 14.1061C16.7231 14.0263 17.1121 14.0555 17.4701 14.19C18.3773 14.5285 19.32 14.7634 20.2801 14.89C20.7606 14.9579 21.2001 15.1983 21.5165 15.5662C21.833 15.9342 22.0048 16.4047 22.0001 16.89V19.89C22.0012 20.1685 21.9441 20.4442 21.8326 20.6993C21.721 20.9545 21.5574 21.1836 21.3521 21.3719C21.1469 21.5601 20.9046 21.7035 20.6408 21.7927C20.377 21.8819 20.0974 21.9151 19.8201 21.89C16.7429 21.5556 13.7871 20.5041 11.1901 18.82C9.98532 18.0551 8.86858 17.1596 7.86006 16.15L10.6801 13.31Z"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 1L1 23"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PhoneOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PhoneOff.displayName = 'PhoneOff';

export default PhoneOff;
