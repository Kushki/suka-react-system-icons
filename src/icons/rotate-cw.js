import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RotateCw = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M23 4V10H17" />
      <path d="M20.49 15C19.84 16.8399 18.6096 18.4187 16.9842 19.4985C15.3588 20.5783 13.4265 21.1006 11.4784 20.9866C9.53038 20.8726 7.67216 20.1286 6.18376 18.8667C4.69536 17.6047 3.65743 15.8932 3.22637 13.9901C2.79531 12.0869 2.99448 10.0952 3.79386 8.31507C4.59325 6.53495 5.94954 5.06286 7.65836 4.12064C9.36717 3.17841 11.3359 2.8171 13.268 3.09114C15.2 3.36518 16.9906 4.25974 18.37 5.64L23 10" />
    </svg>
  );
});

RotateCw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RotateCw.displayName = 'RotateCw';

export default RotateCw;
