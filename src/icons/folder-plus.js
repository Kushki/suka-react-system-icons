import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FolderPlus = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11V17"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 14H15"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FolderPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FolderPlus.displayName = 'FolderPlus';

export default FolderPlus;
