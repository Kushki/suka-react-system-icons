import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChevronsLeft = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M11 17L6 12L11 7" />
      <path d="M18 17L13 12L18 7" />
    </svg>
  );
});

ChevronsLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronsLeft.displayName = 'ChevronsLeft';

export default ChevronsLeft;
