import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Airplay = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5V15C3 15.2652 3.10536 15.5196 3.29289 15.7071C3.48043 15.8946 3.73478 16 4 16H5C5.55228 16 6 16.4477 6 17C6 17.5523 5.55228 18 5 18H4C3.20435 18 2.44129 17.6839 1.87868 17.1213C1.31607 16.5587 1 15.7956 1 15V5C1 4.20435 1.31607 3.44129 1.87868 2.87868C2.44129 2.31607 3.20435 2 4 2H20C20.7957 2 21.5587 2.31607 22.1213 2.87868C22.6839 3.44129 23 4.20435 23 5V15C23 15.7957 22.6839 16.5587 22.1213 17.1213C21.5587 17.6839 20.7957 18 20 18H19C18.4477 18 18 17.5523 18 17C18 16.4477 18.4477 16 19 16H20C20.2652 16 20.5196 15.8946 20.7071 15.7071C20.8946 15.5196 21 15.2652 21 15V5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H4Z"
        fill="#46525C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 14C12.2968 14 12.5782 14.1318 12.7682 14.3598L17.7682 20.3598C18.0166 20.6579 18.0702 21.0728 17.9056 21.4242C17.741 21.7755 17.388 22 17 22H7.00001C6.61199 22 6.259 21.7755 6.09442 21.4242C5.92984 21.0728 5.98339 20.6579 6.23179 20.3598L11.2318 14.3598C11.4218 14.1318 11.7032 14 12 14ZM9.13505 20H14.865L12 16.562L9.13505 20Z"
        fill="#46525C"
      />
    </svg>
  );
});

Airplay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Airplay.displayName = 'Airplay';

export default Airplay;
