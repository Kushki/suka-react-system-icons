import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudLightning = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
          d="M19.0001 16.9C20.2152 16.6532 21.2953 15.9638 22.0307 14.9655C22.7662 13.9671 23.1044 12.7312 22.9798 11.4975C22.8552 10.2638 22.2766 9.12046 21.3564 8.28937C20.4362 7.45828 19.24 6.99875 18.0001 6.99999H16.7401C16.4087 5.71731 15.7641 4.53698 14.864 3.56498C13.9638 2.59298 12.8364 1.85972 11.5829 1.43106C10.3294 1.00239 8.98903 0.891726 7.68219 1.109C6.37535 1.32628 5.14293 1.86469 4.09556 2.6759C3.0482 3.48711 2.21868 4.54573 1.68149 5.75671C1.1443 6.96768 0.916246 8.29311 1.01781 9.61399C1.11937 10.9349 1.54737 12.2098 2.26338 13.3245C2.97939 14.4391 3.96099 15.3584 5.12006 16"
          stroke="#46525C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 11L9 17H15L11 23"
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

CloudLightning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudLightning.displayName = 'CloudLightning';

export default CloudLightning;
