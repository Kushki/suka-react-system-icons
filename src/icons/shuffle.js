import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Shuffle = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M16 3H21V8" />
      <path d="M4 20L21 3" />
      <path d="M21 16V21H16" />
      <path d="M15 15L21 21" />
      <path d="M4 4L9 9" />
    </svg>
  );
});

Shuffle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Shuffle.displayName = 'Shuffle';

export default Shuffle;
