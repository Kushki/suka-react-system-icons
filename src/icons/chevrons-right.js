import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChevronsRight = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M13 17L18 12L13 7" />
      <path d="M6 17L11 12L6 7" />
    </svg>
  );
});

ChevronsRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronsRight.displayName = 'ChevronsRight';

export default ChevronsRight;
