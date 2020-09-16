import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ThumbsDown = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        d="M17 2H19.67C20.236 1.98999 20.7859 2.18813 21.2154 2.55681C21.645 2.9255 21.9242 3.43905 22 4V11C21.9242 11.5609 21.645 12.0745 21.2154 12.4432C20.7859 12.8119 20.236 13.01 19.67 13H17M10 15V19C10 19.7956 10.3161 20.5587 10.8787 21.1213C11.4413 21.6839 12.2044 22 13 22L17 13V2H5.72003C5.2377 1.99454 4.76965 2.16359 4.40212 2.47599C4.0346 2.78839 3.79235 3.22309 3.72003 3.7L2.34003 12.7C2.29652 12.9866 2.31586 13.2793 2.39669 13.5577C2.47753 13.8362 2.61793 14.0937 2.80817 14.3125C2.99842 14.5313 3.23395 14.7061 3.49846 14.8248C3.76297 14.9435 4.05012 15.0033 4.34003 15H10Z"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ThumbsDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ThumbsDown.displayName = 'ThumbsDown';

export default ThumbsDown;
