import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const HelpCircle = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <g clipPath="url(#clip0)">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M9.08997 9.00001C9.32507 8.33167 9.78912 7.76811 10.3999 7.40914C11.0107 7.05016 11.7289 6.91894 12.4271 7.03872C13.1254 7.15849 13.7588 7.52153 14.215 8.06353C14.6713 8.60554 14.921 9.29153 14.92 10C14.92 12 11.92 13 11.92 13" />
        <path d="M12 17H12.01" />
      </g>
      <defs>
        <clippath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clippath>
      </defs>
    </svg>
  );
});

HelpCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HelpCircle.displayName = 'HelpCircle';

export default HelpCircle;
