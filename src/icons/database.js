import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Database = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12 8C16.9706 8 21 6.65685 21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5C3 6.65685 7.02944 8 12 8Z" />
      <path d="M21 12C21 13.66 17 15 12 15C7 15 3 13.66 3 12" />
      <path d="M3 5V19C3 20.66 7 22 12 22C17 22 21 20.66 21 19V5" />
    </svg>
  );
});

Database.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Database.displayName = 'Database';

export default Database;
