import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudSnow = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path
          d="M20 17.58C21.0513 17.1196 21.9121 16.3115 22.4381 15.2915C22.9641 14.2715 23.1232 13.1016 22.8886 11.9782C22.6541 10.8547 22.0402 9.8462 21.1501 9.12182C20.2599 8.39745 19.1477 8.00134 18 7.99999H16.74C16.4231 6.77251 15.8189 5.63794 14.9773 4.68979C14.1358 3.74164 13.081 3.00706 11.8998 2.54661C10.7186 2.08615 9.44494 1.913 8.18372 2.04143C6.92249 2.16986 5.70984 2.59618 4.64573 3.28527C3.58161 3.97436 2.6965 4.90647 2.06334 6.00478C1.43018 7.1031 1.06711 8.33616 1.00404 9.60234C0.940984 10.8685 1.17974 12.1316 1.70064 13.2873C2.22153 14.4431 3.00965 15.4586 4.00003 16.25"
          stroke="#46525C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clippath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clippath>
      </defs>
    </svg>
  );
});

CloudSnow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudSnow.displayName = 'CloudSnow';

export default CloudSnow;
