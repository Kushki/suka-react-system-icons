import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DownloadCloud = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M8 17L12 21L16 17" />
        <path d="M12 12V21" />
        <path d="M20.8801 18.09C21.7494 17.4786 22.4014 16.6061 22.7413 15.5991C23.0813 14.5921 23.0915 13.503 22.7705 12.4898C22.4494 11.4766 21.8139 10.5921 20.9561 9.96456C20.0983 9.33703 19.0629 8.99916 18.0001 8.99999H16.7401C16.4393 7.82787 15.8765 6.73924 15.0942 5.81607C14.3118 4.89291 13.3302 4.15925 12.2233 3.67035C11.1163 3.18144 9.9129 2.95002 8.70358 2.99351C7.49426 3.037 6.31057 3.35426 5.24161 3.92142C4.17265 4.48858 3.24628 5.29084 2.53224 6.26782C1.81821 7.2448 1.33511 8.37104 1.11932 9.56174C0.903525 10.7524 0.960665 11.9766 1.28643 13.142C1.6122 14.3074 2.19811 15.3838 3.00005 16.29" />
      </g>
      <defs>
        <clippath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clippath>
      </defs>
    </svg>
  );
});

DownloadCloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DownloadCloud.displayName = 'DownloadCloud';

export default DownloadCloud;
