import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudDrizzle = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M8 19V21" />
        <path d="M8 13V15" />
        <path d="M16 19V21" />
        <path d="M16 13V15" />
        <path d="M12 21V23" />
        <path d="M12 15V17" />
        <path d="M20 16.58C21.0513 16.1196 21.9121 15.3116 22.4381 14.2916C22.9641 13.2715 23.1232 12.1016 22.8886 10.9782C22.6541 9.85478 22.0402 8.84623 21.1501 8.12185C20.2599 7.39748 19.1477 7.00137 18 7.00002H16.74C16.4231 5.77254 15.8189 4.63797 14.9773 3.68982C14.1358 2.74167 13.081 2.00709 11.8998 1.54664C10.7186 1.08619 9.44494 0.913035 8.18372 1.04146C6.92249 1.16989 5.70984 1.59622 4.64573 2.2853C3.58161 2.97439 2.6965 3.9065 2.06334 5.00482C1.43018 6.10313 1.06711 7.33619 1.00404 8.60237C0.940984 9.86855 1.17974 11.1316 1.70064 12.2874C2.22153 13.4432 3.00965 14.4586 4.00003 15.25" />
      </g>
      <defs>
        <clippath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clippath>
      </defs>
    </svg>
  );
});

CloudDrizzle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudDrizzle.displayName = 'CloudDrizzle';

export default CloudDrizzle;
