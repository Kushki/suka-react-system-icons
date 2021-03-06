import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sunset = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M17 18C17 16.6739 16.4732 15.4021 15.5355 14.4645C14.5979 13.5268 13.3261 13 12 13C10.6739 13 9.40215 13.5268 8.46447 14.4645C7.52678 15.4021 7 16.6739 7 18" />
      <path d="M12 9V2" />
      <path d="M4.21997 10.22L5.63997 11.64" />
      <path d="M1 18H3" />
      <path d="M21 18H23" />
      <path d="M18.36 11.64L19.78 10.22" />
      <path d="M23 22H1" />
      <path d="M16 5L12 9L8 5" />
    </svg>
  );
});

Sunset.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sunset.displayName = 'Sunset';

export default Sunset;
