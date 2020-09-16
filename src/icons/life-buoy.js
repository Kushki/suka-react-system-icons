import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LifeBuoy = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
      <path d="M4.93005 4.93L9.17005 9.17" />
      <path d="M14.83 14.83L19.07 19.07" />
      <path d="M14.83 9.17L19.07 4.93" />
      <path d="M14.83 9.17L18.36 5.64" />
      <path d="M4.93005 19.07L9.17005 14.83" />
    </svg>
  );
});

LifeBuoy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LifeBuoy.displayName = 'LifeBuoy';

export default LifeBuoy;
